import Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;