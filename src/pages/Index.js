import * as React from 'react';
import "../Styles/style.css";
import "../components/script.js";

export default function Index() {

  return (
      // <!-- Nav-bar -->
      <html lang="en">
          <body id="body">
             <div class="hero-img">
             {/* <!------------intro-card-------------> */}
             <div id="wel-card">
                <div class="wel-title">
                   <p>Created For The Sole Purpose Of Turning An <span class="wel-colr">Entertainment</span> into <span
                         class="wel-colr">Something More.</span>
                   </p>
                   <h1>This isn't an <span class="wel-colr">Entertainment</span><br />
                      It's is an <span class="wel-colr">Experience</span></h1>
                   <div class="wel-link">
                      <p onclick="log()">Get Started<span class="wel-icon"><i class="ri-arrow-right-line"></i></span></p>
                   </div>
                </div>
             </div>
             </div>
             {/* <!----------------description-----------------> */}
             <div id="a1" class="feature">
                <div class="feature-title">
                   <h2 class="qut">WATCH YOUR FAVOURIT SHOWS IN HERE:</h2>
                   <p>Housing the biggest collection of Anime on the internet.Right here to watch at your home.</p>
                </div>
                <ul class="feature-list">
                   <li class="feature-points">
                      <div class="feature-card">
                         <img class="feature-icon" alt="hdicon" src="/public/Asset/image/hdicon.svg" />
                         <h3 class="qut">HD-Quality</h3>
                      </div>
                      <p>Anime to watch form normal to HD-Quality</p>
                   </li>
                   <li class="feature-points">
                      <div class="feature-card">
                         <img class="feature-icon" alt="deviceicon" src="/public/Asset/image/deviceicon.svg" />
                         <h3 class="qut">Link Upto-5 device</h3>
                      </div>
                      <p id="description">link upto 5 device to share with your family</p>
                   </li>
                   <li class="feature-points">
                      <div class="feature-card">
                         <img class="feature-icon" alt="fastupicon" src="/public/Asset/image/fastupicon.svg" />
                         <h3 class="qut">Fast-Update</h3>
                      </div>
                      <p id="description">Get-live fast update for your favourite show</p>
                   </li>
                </ul>
             </div>
             {/* <!---------------Plans--------------> */}
             <section id="a2" class="plan-card">
                <h2 class="plan-head">Various Plans To Suit Your Needs</h2>
                <div class="plan">
                   <div class="plan-b">
                      <div class="basic-title">
                         <h1>Basic</h1>
                      </div>
                      <div class="plan-icon">
                         <img alt="paper-plane" src="/public/Asset/image/paper-plane.svg" class="p-icon" />
                      </div>
                      <div>
                         <h2> &#8377 70(Monthly)</h2>
                         <h2> &#8377 700(Annul)</h2>
                      </div>
                      <div class="fe-card">
                         <h3>Features</h3>
                      </div>
                      <div>
                         <ul>
                            <li>
                               <p>Link-upto 2 device</p>
                            </li>
                            <li>
                               <p>Download storage :20GB</p>
                            </li>
                            <li>
                               <p>Stream HD-Quality</p>
                            </li>
                         </ul>
                      </div>
                      <div class="button basic-btn">
                         <a href="#">Buy</a>
                      </div>
                   </div>
                   <div class="plan-p">
                      <div class="pro-title">
                         <h1>Premium</h1>
                      </div>
                      <div class="plan-icon">
                         <img alt="Rocket" src="/public/Asset/image/Rocket.svg" class="p-icon" />
                      </div>
                      <div>
                         <h2> &#8377 150(Monthly)</h2>
                         <h2> &#8377 1000(Annul)</h2>
                      </div>
                      <div class="fe-card">
                         <h3>Features</h3>
                      </div>
                      <div>
                         <ul>
                            <li>
                               <p>Link-Upto 5 device</p>
                            </li>
                            <li>
                               <p>Download Storage :50GB</p>
                            </li>
                            <li>
                               <p>Stream Ultra-HD to HD Quality</p>
                            </li>
                            <li>
                               <p>Early access to episodes</p>
                            </li>
                            <li>
                               <p>Get special Updates from the show</p>
                            </li>
                         </ul>
                      </div>
                      <div class="pro-btn button">
                         <a href="#">Buy</a>
                      </div>
                   </div>
                </div>
             </section>
             {/* <!-------------footer--------------> */}
             <hr />
             <footer id="a4">
                <div class="foo">
                   <img class="foo-logo" alt="company logo" src="/public/Asset/logo/mLogo.svg" />
                   <div class="foo-credit">
                      <h3>A Product Of MDX</h3>
                      <p>Created For The Sole Purpose Of Making An Entertainment into Something More. </p>
                   </div>
                   <div class="contact">
                      <h2>Get In Touch With Us</h2>
                      <ul class="contact-links">
                         <li><a href="https://github.com/Maxxjx"><i class="ri-github-fill"></i></a></li>
                         <li><a href="mailto:iamshyamssj@gmail.com"><i class="ri-mail-line"></i></a></li>
                         <li><a href=""><i class="ri-twitter-line"></i></a></li>
                         <li><a href="https://www.linkedin.com/in/shyam-m-aa9026240/"><i class="ri-linkedin-box-fill"></i></a>
                         </li>
                      </ul>
                   </div>
                </div>
             </footer>
             {/* <!-------------Copyright---------------> */}
             <div id="end">
                <p>Copyright &copy BGAnime.All Rights Reserved.Designed By <a href="">Maxx</a></p>
             </div>
           
           </body>
             </html>
  );
}

