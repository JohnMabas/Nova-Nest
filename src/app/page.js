import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExploreCategories from "@/components/ExploreCategories";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import PopularAds from "@/components/PopularAds";
import MobileApplication from "@/components/MobileApplication";
import Testimonials from "@/components/Testimonials";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import { BackgroundDecor } from "@/components/ui";
import { fetchPropertyByAddress } from "@/lib/realty";

export default async function HomePage() {
  const apiProperty = await fetchPropertyByAddress(
    "1875 AVONDALE Circle, Jacksonville, FL 32205"
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-nest-bg">
      <BackgroundDecor />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ExploreCategories />
        <ExclusiveOffers />
        <PopularAds apiProperty={apiProperty} />
        <MobileApplication />
        <Testimonials />
        <GetStarted />
        <Footer />
      </div>
    </main>
  );
}
