import Footer from "./components/HomeComponents/Footer";
import HomePage from "./components/HomeComponents/HomePage";
import JoinUsShow from "./components/HomeComponents/JoinUsShow";
import OurServices from "./components/HomeComponents/OurServices";
import HowItWorks from "./components/HomeComponents/HowItWorks";
import AsSeenAs from "./components/HomeComponents/AsSeenAs";
import Stats from "./components/HomeComponents/Stats";
import ReadyToGetStarted from "./components/HomeComponents/ReadyToGetStarted";
import OurLocations from "./components/HomeComponents/OurLocations";
import OurPartners from "./components/HomeComponents/OurPartners";

const page = () => {
  return (
    <>
      <main>
        <div className="w-full min-h-screen">
          <HomePage />
          <JoinUsShow />
          <OurServices />
          <HowItWorks />
          <OurLocations />
          <OurPartners />
          <AsSeenAs />
          <Stats />
          <ReadyToGetStarted />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
