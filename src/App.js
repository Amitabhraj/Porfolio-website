import './App.css';
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import About from "./Components/About"
import Alert from "./Components/Alert"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState} from 'react'

function App() {




const [mode, setMode] = useState('light')
const [modetext, setmodetext] = useState('Enable dark mode')
const [alert, setAlert] = useState(null)

  const togglemode = () =>{
    if(mode === "light"){
      setMode("dark");
      setmodetext('Enable light mode');
      showAlert("Dark mode has Been Enable", "success");
      document.body.style.backgroundColor="#042743"
  }
  else{
    setMode('light');
    setmodetext('Enable dark mode')
    showAlert("Light mode has Been Enable", "success");
    document.body.style.backgroundColor = "white"
  }
}


 const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
      setAlert(null);
  }, 1500);
}




  return (
<>
<Router>
    <Navbar
     headName="TextUtils" 
     homeName="Home" 
     aboutName="About Us"
     mode={mode}
     modetext={modetext}
     togglemode={togglemode}/>



    <Alert
    alert={alert}/>


    <Switch>
        <Route exact path="/about">
            <About mode={mode}/>
        </Route>
        <Route exact path="/">
            <div className="container"><TextForm heading = "Please Enter Your Text Here!" mode={mode} showAlert={showAlert}/></div>
        </Route>
    </Switch>

</Router>
</>
  );
}

export default App;
