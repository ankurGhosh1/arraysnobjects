import type { NextPage } from "next";
import {
  Navbar,
  Container,
  Footer,
  Hero,
  Flow,
  WhyUs,
  Features,
  Cta,
  RightSidebar,
  Metatags,
} from "../components";
import useScreenSize from "../hooks/useScreenSize";

function Home() {
  const match = useScreenSize("768px");
  return (
    <div className="bg-primary">
      <Metatags
        title="We specialize in creating & designing websites!"
        description="We specialize in creating & designing websites!"
      />
      <Container>
        <Navbar />
        <Hero />
        <Flow />
        <WhyUs />
        <Features />
      </Container>
      <div className="bg-secondary mb-32 max-sm:mb-48">
        <Container>
          <Cta />
        </Container>
      </div>
      <Footer />
      {match ? null : <RightSidebar />}
    </div>
  );
}

export default Home;
