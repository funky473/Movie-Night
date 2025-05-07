export const metadata = {
  title: "Movie Night",
  description: "Find the perfect movie for your evening entertainment",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
    </>
  );
}
