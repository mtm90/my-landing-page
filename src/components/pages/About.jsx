import Header from "../Header";
import MainAbout from "../MainAbout";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <MainAbout />
      </div>
      <Footer />
    </div>
  );
}
