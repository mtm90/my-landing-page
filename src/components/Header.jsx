import React from "react";
import Navigationbar from "../components/layout/Navigationbar";
import { useColors } from "./ColorContext";

const Header = () => {
  const { colors } = useColors();
  return (
    <header style={{ backgroundColor: colors.header }}>
      <h1>- Welcome to My Landing Page! -</h1>
      <Navigationbar />
    </header>
  );
};

export default Header;
