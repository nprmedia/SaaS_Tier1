import ProductHero from "@/components/featurepage/ProductHero";
import FeaturesGrid from "@/components/featurepage/FeaturesGrid";
import CtaSection from "@/components/homepage/CtaSection";
import TrustSection from "@/components/homepage/TrustSection";

export default function FeaturesPage() {
  return (
    <main className="w-full">
      <ProductHero />
      <FeaturesGrid />
      <TrustSection />
      <CtaSection />
    </main>
  );
}
