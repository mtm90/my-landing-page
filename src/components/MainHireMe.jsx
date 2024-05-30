import React, { useState } from "react";
import axios from "axios";
import { useColors } from "./ColorContext";


const MainHireMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contact", { email, message });
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };
  const { colors } = useColors();


  return (
    <main className="main" style={{ backgroundColor: colors.main }}>
      <p>
        I'm currently unemployed and <span>aggressively</span> looking for work.{" "}
        <br />
        My work focuses on building <span>responsive</span> websites with{" "}
        <span>React</span>, with a special attention to <span>UI/UX</span>{" "}
        design and <span>SEO</span>. <br />
        I'm also acquiring knowledge in the <span>
          data science
        </span> field: <br /> i believe learning to collect, analyze and
        manipulate data nowadays is a very valuable skill to learn. <br />
        Please contact me if you wish to have a well-designed website!
        <br /> <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Your Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              className="txtarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button style={{ backgroundColor: colors.colors }} className="btn" type="submit">
            Submit
          </button>
        </form>
        <br />I have always been interested in <span>video games</span> since i
        can remember. <br />
        Now that i'm getting involved in this line of work, i can finally
        unleash my <span>creativity</span> by building games, my lifetime
        passion. <br />
        Here are some of the projects i developed so far (some of them with the
        help of Artifical Intelligence). <br />
        <br />
        <a href="https://mtm90.github.io/memory_game/">Memory game</a> <br />
        <a href="https://mtm90.github.io/snake/">Snake</a> <br />
        <a href="https://mtm90.github.io/zodiac/">Zodiac Sign</a>
      </p>
    </main>
  );
};

export default MainHireMe;
