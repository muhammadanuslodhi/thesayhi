

import AboutHero from "../Components/abouthero";
import OurStory from "../Components/ourstory";
import MissionVision from "../Components/MissionVision";
import OurValues from "../Components/OurValues";
import NewsletterSection from "../Components/newsletter";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <NewsletterSection />
    </main>
  );
}