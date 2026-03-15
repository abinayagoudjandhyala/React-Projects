import React, { useState } from "react";

const App = () => {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const themeStyle = {
    height: "100vh",
    padding: "20px",
    textAlign: "center",
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#a41e1e" : "#000"
  };

  return (
    <div style={themeStyle}>
      
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Theme Switcher
      </h1>

      <p>This is a simple theme switcher.</p>

      <button onClick={toggleTheme}>
        {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>

    </div>
  );
};

export default App;