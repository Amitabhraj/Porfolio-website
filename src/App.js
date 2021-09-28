import './App.css';
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import Alert from "./Components/Alert"
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
    <Navbar
     headName="TextUtils" 
     homeName="Home" 
     aboutName="About TextUtils"
     mode={mode}
     modetext={modetext}
     togglemode={togglemode}/>


    <Alert
    alert={alert}/>


    <div className="container"><TextForm 

    heading = "Please Enter Your Text Here!"
    mode={mode}
    showAlert={showAlert}/>

    </div>

</>
  );
}

export default App;
