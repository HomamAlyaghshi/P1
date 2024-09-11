import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import PropjectSingle from "./components/ProjectSingle";
import OnePage from "./components/OnePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={OnePage} />
        <Route path="/home-page" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project-single" component={PropjectSingle} />
      </Switch>
    </Router>
  );
}

export default App;
