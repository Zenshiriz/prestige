import { Button } from "flowbite-react";
import NavbarComponent from "./component/NavbarComponent";
import Hero from "./component/Hero";
import OurServices from "./component/OurServices";
import WhyUs from "./component/WhyUs";
import OurMission from "./component/OurMission";
import AboutUs from "./component/AboutUs";
import Footer from "./component/FooterComponent";
import FooterComponent from "./component/FooterComponent";
import Contact from "./component/Contact";

function App() {

  return (
    <main className=" !scroll-smooth snap-y" style={{scrollBehavior:"smooth",scrollMargin:"-20px"}}>
     <NavbarComponent/>
     <Hero/>
     <WhyUs/>
     <OurServices/>
     <OurMission/>
     <AboutUs/>
     <Contact/>
     <FooterComponent/>
    </main>
  )
}

export default App
