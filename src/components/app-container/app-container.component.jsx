import React from "react";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../theme";

import About from "../about/about.component";
import Education from "../education/education.component";
import Experience from "../experience/experience.component";
import Footer from "../footer/footer.component";
import Landing from "../landing/landing.component";
import Navigation from "../navigation/navigation.component";
import Projects from "../projects/projects.component";

import { Content, Layout } from "./app-container.styles";

const inViewConfig = {
  threshold: 0.4,
};

const AppContainer = () => {
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewConfig);
  const [experienceRef, experienceInView, experienceEntry] = useInView(
    inViewConfig
  );
  const [educationRef, educationInView, educationEntry] = useInView(
    inViewConfig
  );
  const [projectsRef, projectsInView, projectsEntry] = useInView(inViewConfig);

  const entries = {
    aboutEntry,
    experienceEntry,
    educationEntry,
    projectsEntry
  };

  const inViewTrackers = {
    aboutInView,
    experienceInView,
    educationInView,
    projectsInView
  };

  const scrollToRef = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation scrollTo={scrollToRef} {...entries} {...inViewTrackers} />
        <Content>
          <Landing />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
          <Education ref={educationRef} />
        </Content>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default AppContainer;
