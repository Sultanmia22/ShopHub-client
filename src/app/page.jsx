import Feature from "@/Components/Feature/Feature";
import Hero from "@/Components/Hero/Hero";
import Popular from "@/Components/PopularSection/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Popular/>
    </div>
  );
}
