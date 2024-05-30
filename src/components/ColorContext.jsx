import React, { createContext, useState, useContext } from 'react';

// Create the context
const ColorContext = createContext();

// Function to generate shades of a base color
const generateShades = (baseColor) => {
  const [r, g, b] = hexToRgb(baseColor);
  const colors = Array.from({ length: 5 }, (_, i) => {
    const factor = i === 0 ? 0.05 : 1 - i * 0.15; // Make the first color extremely light
    return rgbToHex(
      Math.min(255, Math.floor(r / factor)),
      Math.min(255, Math.floor(g / factor)),
      Math.min(255, Math.floor(b / factor))
    );
  });
  return {
    body: colors[4],
    header: colors[1],
    footer: colors[1],
    sidebar: colors[3],
    main: colors[3],
    colors: colors[2]
  };
};

// Helper functions to convert between hex and rgb
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Create a provider component
export const ColorProvider = ({ children }) => {
  const baseColor = '#00a693'; // Set your base color here
  const [colors, setColors] = useState(generateShades(baseColor));

  const regenerateColors = () => {
    const newBaseColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColors(generateShades(newBaseColor));
  };

  return (
    <ColorContext.Provider value={{ colors, regenerateColors }}>
      {children}
    </ColorContext.Provider>
  );
};

// Create a custom hook to use the color context
export const useColors = () => useContext(ColorContext);
