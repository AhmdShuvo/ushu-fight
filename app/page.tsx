import Banner from "./components/Banner";
import About from "./components/About";
import Training from "./components/Training";
import Trainer from "./components/Trainer";
import Schedule from "./components/Schedule";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Training />
      <Trainer />
      <Schedule />
      <Feature />
      <Testimonial />
      <CallToAction />
      <BlogSection />
    </>
  );
}
