import './App.css';
import AddItem from './components/add-item-component';

import Bonjour from './components/Bonjour';
import RemoveItem from './components/Remove-item-component';
import DisplayItems from './components/display-list-component';
import React, { useState, useContext } from "react";
import ThemeContext from "./Themecontext";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function ThemeChoice(props) {
  //consommer le context
    const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    updateTheme(value); 
  };

  return (
    
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
       <option value="blue">bleu clair</option>
        <option value="red">red</option>
        <option value="green">vert</option>
    </select>
  );
}
function ToolBar(props) {
  return (
    <div>
      
      <ThemeChoice />
    </div>
  );
}

const Home = () => {
  return(<h2>this is home page </h2>);
};

const Theme = () => {
  return(<h2>this is theme page</h2>);
};

function App() {
  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme,
    updateTheme: setTheme
  };
  return (
    <ThemeContext.Provider value={contextValue}>
    <div className={theme}>
      <ToolBar />
      <p>Theme utilisé : {theme}</p>
    
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<AddItem />} />
        <Route path="/page1" element={<Bonjour />} />
        <Route path="/page2" element={<Theme />} />

      </Routes>
    </BrowserRouter>
    
    </div>
   
    </ThemeContext.Provider>
  );
}

export default App;
