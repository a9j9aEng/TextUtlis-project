import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout(()=>{
          setAlert(null);
         },1500);   
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
     <Router>
      <Navbar title="textUtils" about="About Us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route  exact path="/about" element={<About  head="About Us"  mode={mode}/>}></Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter,Character Counter,
        Remove extra spaces" mode={mode} />}></Route>
      </Routes>
      </div>
     </Router>
    </>
  )
}

export default App;
