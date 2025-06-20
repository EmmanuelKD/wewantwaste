"use client";

import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/checkout-context";
import { AnimatePresence, motion } from "framer-motion";

export default function StepInfoCard() {
  const { data } = useCheckout();
  const { selectedSkip } = data;
  const onContinue = () => {};

  return (
    <AnimatePresence>
      {selectedSkip && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-xl border-t border-border p-4 md:p-6 z-50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">
                {selectedSkip.size} Yard Skip – £
                {(selectedSkip.price_before_vat + selectedSkip.vat).toFixed(2)}
              </p>
              <p className="text-sm text-label">
                {selectedSkip.hire_period_days}-day hire •{" "}
                {selectedSkip.allows_heavy_waste
                  ? "Heavy waste allowed"
                  : "No heavy waste"}{" "}
                •{" "}
                {selectedSkip.allowed_on_road
                  ? "Can be placed on road"
                  : "Off-road only"}
              </p>
            </div>
            <div className="flex justify-around  w-full md:w-auto  flex-row flex-nowrap md:gap-5 ">
              <Button
                variant={"outline"}
                className=" md:w-auto border-[.2px] border-waste-accent text-waste-accent hover:bg-waste-accent hover:text-white"
              >
                Back
              </Button>

              <Button
                onClick={onContinue}
                className=" md:w-auto bg-waste-accent hover:bg-waste-accent-700 border-waste-accent"
              >
                Continue
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
