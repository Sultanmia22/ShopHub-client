import Categories from "@/Components/Categories/Categories";
import CtaSection from "@/Components/CTA/CtaSection";
import Feature from "@/Components/Feature/Feature";
import Hero from "@/Components/Hero/Hero";
import Popular from "@/Components/PopularSection/Popular";
import Review from "@/Components/Review/Review";
import WeDefferent from "@/Components/WeDefferent/WeDefferent";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Popular/>
      <WeDefferent/>
      <Categories/>
      <Review/>
      <CtaSection/>
    </div>
  );
}
