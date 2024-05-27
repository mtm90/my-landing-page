import Header from "../Header";
import MainHireMe from "../MainHireMe";
import Footer from "../Footer";

export default function HireMe() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <MainHireMe />
      </div>
      <Footer />
    </div>
  );
}
