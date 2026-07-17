import Navbar from "./Components/navbar"; // Path to your navbar component
import Hero from "./Components/hero"; // Path to your navbar component
import Features from "./Components/features"; // Path to your navbar component
import Work from "./Components/work"; // Path to your navbar component
import Platform from "./Components/platform"; // Path to your navbar component
import Stats from "./Components/stats"; // Path to your navbar component
import Industries from "./Components/industries"; // Path to your navbar component
import Costumers from "./Components/costumerresults"; // Path to your navbar component
import Plan from "./Components/plan"; // Path to your navbar component
import Blogs from "./Components/blogs"; // Path to your navbar component
import News from "./Components/newsletter"; // Path to your navbar component
import Footer from "./Components/footer"; // Path to your navbar component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <Work />
        <Platform />
        <Stats />
        <Industries />
        <Costumers />
        <Plan />
        <Blogs />
        <News />
        <Footer />
        </>
  );
}