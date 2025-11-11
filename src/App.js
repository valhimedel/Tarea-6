import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`App ${theme}-theme`}>
      <div className="topbar">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Noche" : "🌞 Día"}
        </button>
      </div>

      <header className="App-header">
       
        <div className="App-logo"></div>
        <p>Hello kitty = Hola demonio</p>
      </header>
    </div>
  );
}

export default App;
