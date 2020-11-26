import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gogh from './a/van-gogh.jpg'
import Footer from './components/Footer'

function App() {
  
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
