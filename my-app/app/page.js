import About from "./components/About.jsx";
import Appointment from "./components/Appointment.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Appointment />
    </div>
  );
}
