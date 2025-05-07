export const metadata = {
  title: "Movie Night",
  description: "Find the perfect movie for your evening entertainment",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
    </>
  );
}
