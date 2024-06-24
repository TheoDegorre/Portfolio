import { NavLink } from "react-router-dom";
import "../styles/Global.css";

function LandingPage() {
  return (
    <>
      <NavLink className="link-contents" to="/home">
        <img
          id="pixel-img"
          src="/assets/background/background_8-bit-graphics.jpg"
          alt=""
        />
        <img
          id="design-img"
          src="/assets/background/squoosh_background_city-horizon.jpg"
          alt=""
        />

        <img id="logo-clip" src="src/assets/design_logo.png" alt="" />
      </NavLink>
    </>
  );
}

export default LandingPage;
