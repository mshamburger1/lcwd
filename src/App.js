import "./App.css";
import { HashRouter as Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactMePage from "./pages/contact";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactMePage} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;
