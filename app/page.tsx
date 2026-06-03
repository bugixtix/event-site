import { SiteNav } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Speakers } from "@/components/sections/speakers";
import { Schedule } from "@/components/sections/schedule";
import { Venue } from "@/components/sections/venue";
import { Tickets } from "@/components/sections/tickets";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <Marquee />
      <Speakers />
      <Schedule />
      <Venue />
      <Tickets />
      <FAQ />
      <Footer />
    </main>
  );
}
