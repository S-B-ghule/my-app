
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

//importing react router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');

  const [alert, setAlert] = useState('null');

  const showAlert = (message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = '#122788';
    showAlert("Dark Mode has been Enabled", "success")
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled", "success")

    }
  }



  return (
    <>
{/* <Router> */}
     {/* importing Navbar components  */}
      <Navbar title="Text Modifier"  aboutText="About" mode={mode} toggleMode={toggleMode}/>       
      <Alert alert={alert}/>

      {/* Adding a prop for textarea table  */}
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route> */}
         
          {/* <Route path="/"> */}
        <TextForm  showAlert ={showAlert} heading="Enter you text below:" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
  </>
  );
}

export default App;
// npx create-react-app my-app           //follow this in terminal to run the app
// cd my-app
// npm start
