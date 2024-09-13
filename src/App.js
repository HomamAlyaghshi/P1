import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import PropjectSingle from "./components/ProjectSingle";
import OnePage from "./components/OnePage";
import SignUP from "./components/SignUp";
import LogIn from "./components/LogIn";
import ForgotPassword from "./components/ForgetPass";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUP} />
        <Route path="/login" component={LogIn} />{" "}
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/main" component={OnePage} />
        <Route path="/home-page" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project-single" component={PropjectSingle} />
      </Switch>
    </Router>
  );
}

export default App;
