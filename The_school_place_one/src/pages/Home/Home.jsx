import '../../themes/global.css'
import { PageNavigation } from "../../components/PageNavigation/PageNavigation.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { CardsSection } from '../../components/CardsSection/CardsSection.jsx';
import { AboutUs } from "../../components/AboutUs/AboutUs.jsx";
import { AwardsSection } from "../../components/AwardsSection/AwardsSection.jsx";
import { EventsSection } from "../../components/EventsSection/EventsSection.jsx";
import { Testimonials } from "../../components/Testimonials/Testimonials.jsx";
import { TeacherSection } from "../../components/TeacherSection/TeacherSection.jsx";
import { NewsletterSection } from "../../components/NewsletterSection/NewsletterSection.jsx";
import { Footer } from "../../components/Footer/Footer.jsx"



export default function Home() {
  return (
    <>
      <PageNavigation />
      <Hero />
      <CardsSection />
      <AboutUs />
      <AwardsSection />
      <EventsSection />
      <Testimonials />
      <TeacherSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}


