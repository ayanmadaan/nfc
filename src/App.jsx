import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
