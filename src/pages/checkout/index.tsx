import { CheckoutProvider } from "@/context/checkout-context";
import SelectSkip from "./select-skip";
import StepperInfoPallet from "@/components/custom/steep-card";

export default function Checkout() {
  return (
    <CheckoutProvider>
      <StepperInfoPallet/>
      <SelectSkip />
    </CheckoutProvider>
  );
}
