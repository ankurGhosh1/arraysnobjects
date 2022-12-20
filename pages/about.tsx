import React from "react";
import {
  Metatags,
  Container,
  Navbar,
  Footer,
  AboutHero,
  AboutMe,
  RightSidebar,
} from "../components";
import useScreenSize from "../hooks/useScreenSize";

function About() {
  const match = useScreenSize("768px");

  return (
    <div className="bg-primary">
      <Metatags
        title="Hi! I am Ankur"
        description="I build robust and scalable websites."
      />
      <Container className="mb-32 max-sm:mb-48">
        <Navbar />
        <AboutHero />
        <AboutMe />
      </Container>
      <Footer />
      {match ? null : <RightSidebar />}
    </div>
  );
}

export default About;
