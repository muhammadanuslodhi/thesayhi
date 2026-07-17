import Navbar from "./Components/navbar"; // Path to your navbar component
import Hero from "./Components/hero"; // Path to your navbar component
import Features from "./Components/features"; // Path to your navbar component
import Work from "./Components/work"; // Path to your navbar component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <Work />
        </>
  );
}