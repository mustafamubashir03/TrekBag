
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Itemlist from "./components/Itemlist";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
          <Header />
          <Itemlist />
          <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
