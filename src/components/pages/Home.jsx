import Header from "../Header";
import Main from "../Main";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
