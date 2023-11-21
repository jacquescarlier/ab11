import Banner from "../containers/banner/Banner";
import Feature from "../components/feature/Feature";
import Header from "../containers/nav/Nav";
import { featuresData } from "../data/data"
import "../css/home.css"

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresData.map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              content={feature.content}
              imageSrc={feature.imageSrc}
              altText={feature.altText}
            />))}
        </section>
      </main>
    </>
  );
}
