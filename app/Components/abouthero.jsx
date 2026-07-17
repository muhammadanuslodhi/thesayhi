const aboutHeroData = {
  heading: "About Us",
  subheading: "Connecting people, one conversation at a time.",
  description:
    "SayHi Connect Pro is built to help businesses communicate smarter and faster.",
};

export default function AboutHero() {
  return (
    <section className="text-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">{aboutHeroData.heading}</h1>
      <p className="text-xl text-gray-500 mb-6">{aboutHeroData.subheading}</p>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {aboutHeroData.description}
      </p>
    </section>
  );
}