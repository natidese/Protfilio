import React from 'react'
import './App.css';
import AppRouter from './Components/Routing/AppRoute'
import { BrowserRouter as Router} from "react-router-dom";
import HeaderFooter from './Components/features/Header&footer/HeaderFooter';


function App() {
  return (
    <div className="App">
        <Router >
          <HeaderFooter>
          <AppRouter/>
          </HeaderFooter>
        </Router >
    </div>
  );
}

export default App;
