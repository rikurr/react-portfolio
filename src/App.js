import React from "react";


import Navigation from "./components/navigation/navigation.component";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Project from "./components/project/project.component";
import Skills from "./components/skills/skills.component";
import Footer from "./components/footer/fotter.component";

import { GlobalStyle } from "./global.styles";
import "./App.css";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Header />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
