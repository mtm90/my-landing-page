import React, { useState } from 'react';
import './App.css';

function ColorGenerator() {
  const [colors, setColors] = useState({
    header: '#9D96B8',
    footer: '#9D96B8',
    sidebar: '#9A7197',
    main: '#886176'
  });

  const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

  const handleButtonClick = () => {
    setColors({
      header: getRandomColor(),
      footer: getRandomColor(),
      sidebar: getRandomColor(),
      main: getRandomColor()
    });
  };

  return (
    <div>
      <header style={{ backgroundColor: colors.header }}></header>
      <footer style={{ backgroundColor: colors.footer }}></footer>
      <div className="sidebar" style={{ backgroundColor: colors.sidebar }}></div>
      <div className="main" style={{ backgroundColor: colors.main }}></div>
      <button onClick={handleButtonClick}>Generate Colors</button>
    </div>
  );
}

export default ColorGenerator;
