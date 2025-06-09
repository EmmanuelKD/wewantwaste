import SkipCard from "@/components/custom/skip-card";
import StepperHeader from "@/components/custom/steep-head";
import { useCheckout } from "@/context/checkout-context";
// import { useSkipOptions } from "@/hooks/use-skip";

export default function SelectSkip() {
  // const {
  //   data: skipOptions,
  //   isLoading,
  //   error,
  // } = useSkipOptions({
  //   postcode: "NR32",
  //   area: "Lowestoft",
  // });
  let isLoading = false;
  let error = null;
  const skipOptions = [
    {
      id: 17933,
      size: 4,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 278,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.813",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17934,
      size: 6,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 305,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.992",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17935,
      size: 8,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 375,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.171",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17936,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 400,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17937,
      size: 12,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 439,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.516",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17938,
      size: 14,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 470,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.69",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17939,
      size: 16,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 496,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.876",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 15124,
      size: 20,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.434",
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 15125,
      size: 40,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.603",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
  ];

  const { setStepData, currentStep, data } = useCheckout();

  return (
    <div className={"bg-blue-50"}>
      <div className={`${data.selectedSkip && "pb-24 md:pb-16"} `}>
        <StepperHeader />
        <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <h1 className="text-3xl font-bold mb-3">Select Your Skip</h1>
          <p className="text-muted-foreground ">
            Select the skip size that best suits your needs
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading skip options...</div>
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
