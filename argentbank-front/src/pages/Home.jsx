import Banner from "../containers/banner/Banner";
import Features from "../containers/features/Features";
import Header from "../containers/nav/Nav";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
    </>
  );
}

