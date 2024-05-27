import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="madeWith">
        <h3>Made with: React</h3>
      </div>
      <div className="rights">
        <h1>® All rights Reserved</h1>
      </div>
      <div className="sLinks">
        <a className="links" href="https://www.instagram.com/mtm_90_/">
          <img className="social" src="/assets/instagram.png" alt="" />
        </a>
        <a className="links" href="https://www.linkedin.com/in/mtm90/">
          <img className="social" src="/assets/linkedin.png" alt="" />
        </a>
        <a className="links" href="https://discordapp.com/users/mtm_90_3410">
          <img className="social" src="/assets/discord.png" alt="" />
        </a>
        <a className="links" href="https://github.com/mtm90">
          <img className="social" src="/assets/github.png" alt="" />
        </a>
        <a className="links" href="https://open.spotify.com/user/zumodepina">
          <img className="social" src="/assets/spotify.png" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
