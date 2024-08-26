import TopBar from "./components/home/topbar";
import './App.css'
import Main from "./components/home/main";
import FooterMain from "./components/home/footermain";
import Objetivos from "./components/home/objetivos";

function App() {
  return (
    <div >
      <TopBar/>
      <Main/>
      <FooterMain/>
      <Objetivos/>
      
    </div>
  );
}

export default App;
