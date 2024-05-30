import Header from "../Header";
import MainHireMe from "../MainHireMe";
import Footer from "../Footer";
import ColorGenerator from "../ColorGenerator";


export default function HireMe() {
  return (
    <div className="app-container">
      <Header />
      <ColorGenerator/>

      <div className="main-content">
        <MainHireMe />
      </div>
      <Footer />
    </div>
  );
}
