import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./styles/Global.css";


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
