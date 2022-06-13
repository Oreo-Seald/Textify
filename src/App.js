
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import About from './components/About';
function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>

      <Navbar title="Textify" extra="Social Media" dropDown='Contact' />
      <Alert alert={alert} />
      <div className="container  my-3" >
  
        <TextForm showAlert = {showAlert} heading = "Enter text below to analyse :" text = "Text to speech" />
              
       { /*<About />*/}
      </div>

    </>
    );
}

export default App;
