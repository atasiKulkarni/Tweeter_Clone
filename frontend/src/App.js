import './App.css';
import LeftSideBar from "./components/LeftSideBar";
import CentralComponent from "./components/CentralComponent";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="d-flex">
       <LeftSideBar />
      <CentralComponent />
      <RightSideBar />
    </div>
  );
}

export default App;
