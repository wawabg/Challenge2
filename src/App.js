import './App.css';
import AddItem from './components/add-item-component';
import RemoveItem from './components/Remove-item-component';
import DisplayItems from './components/display-list-component';
import React, { useState, useContext } from "react";
import ThemeContext from "./Themecontext";
import "./style.css";
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
    
      
      <DisplayItems/>
      <>
        <AddItem/>
        <RemoveItem/>
      </>

        </div>
    </ThemeContext.Provider>
  );
}

export default App;
