import Banner from "../containers/banner/Banner";
import Features from "../containers/features/Features";
import Header from "../containers/nav/Nav";

function Home() {
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

export default Home;
