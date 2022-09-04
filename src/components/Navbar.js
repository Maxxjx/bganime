import * as React from 'react';
import "../Styles/style.css";
import "./script.js";
import "./Login";

export default function Navbar() {
   const log =()=>{
      document.getElementById("full-card").style.display="block";
      document.getElementById("body").style.overflow="hidden";
   };
  const openmenu=()=>{
      document.getElementById("nav").style.display="block";
      document.getElementById("body").style.overflow="hidden";
      document.getElementById("nav-opicon").style.display="none";
      document.getElementById("nav-clicon").style.display="block";
      // document.getElementById("wel-card").style.display="none";
    }
  return (
      // <!-- Nav-bar -->
      <div id="nav-bar">
         {/* <!-- top logo --> */}
         <div class="logo">
            <div href="#"><img id="header-img" src={require("../Assets/logo/mLogo.svg").default} alt="BGAnime logo"/></div>
         </div>
         {/* <!-- menu-bar --> */}
         <div class="menu">
            <nav id="nav">
               <ul id="side-navbar">
                  <li><i id="nav-clicon" onclick="closeMenu()" class="ri-close-line"></i></li>
                  <li><span class="nav-link" href="#a1">About</span></li>
                  <li><span class="nav-link" href="#a2">Pricing</span></li>
                  <li><span class="nav-link" href="#a4">Help</span></li>
                  <li><span class="nav-link" href="#a4">Contact</span></li>
                  <li><span class="nav-link" onClick={log}>Log-In</span></li>
               </ul>
            </nav>
            <div onclick={openmenu}><i id="nav-opicon" className="ri-menu-line"></i> </div>
         </div>
   </div>
  );
}
