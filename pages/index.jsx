import { SearchIcon } from '@heroicons/react/solid';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull some data from server - API endpoints */}
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={location}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-4 -ml-3">
            {/* Pull some data from server - API endpoints */}
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
      <SearchIcon
        className="md:hidden fixed h-12 bottom-5 right-5 bg-red-400 text-white
          rounded-full p-3 cursor-pointer"
      />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`).then((res) =>
    res.json()
  );

  const cardsData = await fetch(`https://links.papareact.com/zp1`).then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
