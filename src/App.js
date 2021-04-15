import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Explanation from "./Components/Explanation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explanation/" component={Explanation} />
      </Switch>
    </div>
  );
}

export default App;
