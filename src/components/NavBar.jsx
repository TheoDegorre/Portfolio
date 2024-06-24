import { NavLink } from "react-router-dom";
import {useState} from "react";

function NavBar() {

  const [isChecked, setIsChecked] = useState(true)
  console.log('%c⧭', 'color: #ff0000', isChecked);
  


  return (
    <nav>
      {/* Audio part */}
      <audio src="./public/assets/audio/Jaunter-Reset.mp3" autoPlay loop muted={isChecked}/>

      {/* logo */}

      <a id="home-logo" href="/home">
        <img id="home-logo" src="./public/assets/images/logo-pixel_TO.png" alt="logo Théo" />
      </a>

      {/* Nav button */}
      <NavLink to="/about">
        <button className="nav-button">About</button>
      </NavLink>
      <NavLink to="/experience">
        <button className="nav-button">Experience</button>
      </NavLink>
      <NavLink to="/project">
        <button className="nav-button">Projet</button>
      </NavLink>
      <NavLink to="/contact">
        <button className="nav-button">Contact</button>
      </NavLink>

      {/* switch style toggle */}
      {/* <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label> */}

      {/* speaker on/off */}
      <input id="checkboxInput" type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
      <label className="toggleSwitch" htmlFor="checkboxInput">
        <div className="speaker">
          <svg viewBox="0 0 75 75" version="1.0" strokeWidth="5" stroke="#fff">
            <path
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
              stroke="#fff"
              strokeWidth="5"
              strokeLinejoin="round"
              fill="#fff"
            ></path>
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
            ></path>
          </svg>
        </div>

        <div className="mute-speaker">
          <svg strokeWidth="5" stroke="#fff" viewBox="0 0 75 75" version="1.0">
            <path
              strokeLinejoin="round"
              fill="#fff"
              d="m39,14-17,15H6V48H22l17,15z"
            ></path>
            <path
              strokeLinecap="round"
              fill="#fff"
              d="m49,26 20,24m0-24-20,24"
            ></path>
          </svg>
        </div>
      </label>
    </nav>

  );
}

export default NavBar;
