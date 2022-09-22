import './App.css';
import Navbar from "./Components/Navbar"
import Experience from "./Components/Experience"
import Skill from "./Components/Skill"
import Contact from "./Components/Contact"
import Starter from "./Components/Starter"
import Resume from "./Components/Resume"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState} from 'react'


function App() {


  return (
<>
<Router>
    <Navbar/>


    <Switch>
      <Route exact path="/">
            <Starter/>
        </Route>
        

        <Route exact path="/contactme">
            <Contact />
        </Route>

    </Switch>

</Router>
</>
  );
}

export default App;
