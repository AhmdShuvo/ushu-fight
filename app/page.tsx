import Banner from "./components/Banner";
import Service from "./components/Service";
import About from "./components/About";
import Feature from "./components/Feature";
import CallToAction from "./components/CallToAction";
import Training from "./components/Training";
import Trainer from "./components/Trainer";
import Event from "./components/Event";
import Testimonial from "./components/Testimonial";
import Plan from "./components/Plan";
import Tutorial from "./components/Tutorial";
import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import SwiperInit from "./components/SwiperInit";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <SwiperInit />
      <Banner />
      <Service />
      <About />
      <Feature />
      <CallToAction />
      <Training />
      <Trainer />
      <Event />
      <Testimonial />
      {/* <Plan />
      <Tutorial />
      <Subscribe /> */}
      {/* <Blog /> */}
    </>
  );
}
