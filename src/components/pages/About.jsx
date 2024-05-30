import Header from "../Header";
import MainAbout from "../MainAbout";
import Footer from "../Footer";
import ColorGenerator from "../ColorGenerator";

export default function About() {
  return (
    <div className="app-container">
      <Header />
      <ColorGenerator/>

      <div className="main-content">
        <MainAbout />
      </div>
      <Footer />
    </div>
  );
}
