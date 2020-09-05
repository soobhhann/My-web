import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/proj/Project";
import About from "./pages/About/About";
import SkillPage from "./pages/Skills/SkillPage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={SkillPage} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
