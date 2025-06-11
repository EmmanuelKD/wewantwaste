import SkipCardSkeleton from "@/components/custom/skeleton/skip-card-skeleton";
import SkipCard from "@/components/custom/skip-card";
import StepperHeader from "@/components/custom/steep-head";
import { useCheckout } from "@/context/checkout-context";
import { useSkipOptions } from "@/hooks/use-skip";

export default function SelectSkip() {
  const {
    data: skipOptions,
    isLoading,
    error,
  } = useSkipOptions({
    postcode: "NR32",
    area: "Lowestoft",
  });
 
  const { setStepData, currentStep, data } = useCheckout();

  return (
    <div className={"bg-blue-50 h-full"}>
      <div className={`${data.selectedSkip && "pb-24 md:pb-16"} `}>
        <StepperHeader />
        <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <h1 className="text-3xl font-bold mb-3">Select Your Skip</h1>
          <p className="text-muted-foreground ">
            Select the skip size that best suits your needs
          </p>
        </div>

        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 pb-8 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-4 md:p-4">
              {[1,2,3,4,5,6]?.map((skip) => (
                <SkipCardSkeleton
                  key={skip}
                  
                />
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">
            Error loading skip options: {(error as any).message}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 pb-8 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-4 md:p-4">
              {skipOptions?.map((skip, index) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  selected={data.selectedSkip?.id == skip.id}
                  onSelect={() => {
                    setStepData(currentStep, {
                      selectedSkip:
                        data.selectedSkip?.id == skip.id
                          ? undefined
                          : skipOptions[index],
                    });
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
