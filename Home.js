import React from "react";
import {Link} from "react-router-dom"
import About from "./About";
import ToggleSwitch from "./ToggleSwitch";

function Home() {
  return (
  <>
  <h2>Welcome to Home Page</h2>;
  <header>
            <h1>Hello!</h1>
            <h2>Welcome to our website!</h2>
            <nav>
            <ul><Link to="/"><li>
                    home
                </li></Link>
                <Link to="/about"><li>
                    About
                </li></Link>
                <Link to="/contact"><li>
                    Contact
                </li></Link>
                
            </ul>
            </nav>
            <hr></hr>
        </header>
        <ToggleSwitch></ToggleSwitch>
  </>
  );

}

export default Home;
