import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import GlobalStyles from './globalStyles';


function App(){
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      </Router>
    </div>
  );
}   

export default App;
