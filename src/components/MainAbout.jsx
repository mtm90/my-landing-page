import React from "react";
import { useColors } from "./ColorContext";

const MainAbout = () => {
  const { colors } = useColors();

  return (
    <main className="main" style={{ backgroundColor: colors.main }}>
      <p>
        My name is Mattia Totonchi Moghaddam, i am an Italian-Iranian tech
        enthusiast who recently transitioned into the tech industry. <br /> Although my
        background is in <span>Business Economics</span>, with a Bachelor's Degree, my
        passion for new technologies like <span>blockchain</span> and <span>AI</span> led me to explore a
        career in tech. <br /><br />Due to the challenging job market in my field of study,
        I decided to pivot and acquire the skills necessary to become a
        front-end developer. <br />I am currently honing my expertise in <span>HTML</span>, <span>CSS</span>,
        and <span>JavaScript</span>, with a focus on <span>React</span>. <br /><br />While I do not yet have
        professional experience in this field, I am highly motivated to start my
        career and continuously improve my skills. <br />Recently, I completed an
        intensive online course where I gained practical knowledge and hands-on
        experience.  <br /><br />I am particularly excited about this new career path because
        it allows me to leverage my creativity, adaptability, and
        problem-solving skills. I am known for my rapid thinking and ability to
        manage my time effectively, ensuring I meet deadlines without
        compromising quality. My accountability and active listening skills make
        me a reliable and communicative team member, eager to contribute and
        grow.  <br /><br />If you would like to know more about my background and
        qualifications, please check my CV. <br /><br />
        <a href="https://mattiatotonchi1990curriculumvitae.my.canva.site/">
          My CV
        </a>
      </p>
    </main>
  );
};

export default MainAbout;
