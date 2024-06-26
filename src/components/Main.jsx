import React from "react";
import { useColors } from "./ColorContext";


const Main = () => {
  const { colors } = useColors();

  return (
    <main className="main" style={{ backgroundColor: colors.main }}>
      <p>
        Hi! i'm Mattia, a junior front-end developer with a specialization in{" "}
        React framework. <br />
        My goal is to improve everyday in building <span>responsive</span> and
        <span> high-performance </span>
        web applications. <br />
        Feel free to contact me if you're looking to work with a{" "}
        <span>passionate</span> and
        <span> dynamic</span> professional.
        <br /> <br />
        If you're not looking to hire me, don't leave just yet! Keep looking
        around, you might find some secrets hidden somewhere.... <br />
        Or maybe not, there's only one way to find out I guess. <br /> <br />
        While my primary focus is on <span>React </span>framework, my journey in
        web development extends far beyond. Take your time to navigate through
        my work and witness the evolution of my craft.
      </p>
    </main>
  );
};

export default Main;
