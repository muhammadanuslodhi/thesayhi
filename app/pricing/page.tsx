import PricingHero from "../Components/pricinghero";
import Plan from "../Components/plan";
import Comparison from "../Components/comparison";
import ROI from "../Components/roi";
import Faq from "../Components/pricefaq";

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <Plan />
      <Comparison />
      <ROI />
      <Faq />
      {/* baaki sections yahan add karein */}
    </main>
  );
}