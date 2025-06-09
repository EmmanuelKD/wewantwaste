import { CheckoutProvider } from "@/context/checkout-context";
import SelectSkip from "./select-skip";
import StepInfoCard from "@/components/custom/steep-card";

export default function Checkout() {
  return (
    <CheckoutProvider>
      <SelectSkip />
      <StepInfoCard/>
    </CheckoutProvider>
  );
}
