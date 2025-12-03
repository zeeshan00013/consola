import About from "./components/About.jsx";
import HomePage from "./components/Home.jsx";
import Insuranace from "./components/Insuranace.jsx";
import LocationHours from "./components/map.jsx";
import Service from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white sticky">
      <HomePage />
      <About />
      <Service />
      <WhyChooseUs />
      <Testimonials />
      <Insuranace />
      <LocationHours />
    </div>
  );
}
