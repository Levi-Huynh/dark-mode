import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  console.log("darkmode state in Nav:", darkMode);
  const toggleMode = e => {
    e.preventDefault();
    //THIS RIGHT HERE CHANGES EVERYTHING!
    //THE OPPOSITE OF NULL= TRUE! :D YAY!
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

