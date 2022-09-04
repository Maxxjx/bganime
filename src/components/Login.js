import  React , { useState } from "react";
import "../Styles/style.css";
import "./script";
import "./Navbar";


export default function LoginCard() {
   const logout=()=>{
    document.getElementById("full-card").style.display="none";
    document.getElementById("body").style.overflow="auto";
  };
  const [userId,setuserId]=useState(" ");
  const [password,setpassword]=useState(" ");
  const [email,setemail]=useState(" ");

  const handleclick=(e)=>{
    e.preventDefault()
    const user ={userId,email,password};
    console.log(user);
  //   fetch("http://localhost:3060/userlogin/add",{
  //   method:"POST",
  //   headers: {"content-type":"application/json"},
  //   body:JSON.stringify(user)
  // }).then
  };
  return (
    <div id="full-card">
      <div class="login">
        <div class="login-card">
          <form class="card">
            <div class="log-title">
              <p>Register</p>
            </div>
            <div>
              <div>
                <label For="UserName">Username</label>
                <br />
                <input type="text" id="UserName" Value={userId}
                onChange={(e)=>setuserId(e.target.value)}
                placeholder="username" required />
              </div>
              <div>
                <label For="Email">Email</label>
                <br />
                <input type="text" id="Email" Value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Email" required />
              </div>
              <div>
                <label For="Password">Password</label>
                <br />
                <input type="Password" id="Password" Value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="Password" required />
              </div>
            </div>
            <div>
               <p>
                <a href="dd"> Forgot Password?</a>
              </p>
              <button onClick={handleclick}>Log in</button>
              {/* <div class="sign-up" action="#">
                <p>
                <a href="dd"> Don't have an account?</a>
                </p>
                <button onClick="">Sign-Up</button>
              </div> */}
            </div>
          </form>
        </div>
        <span onclick={logout} class="clo-icon">
          <i class="ri-close-line"></i>
        </span>
      </div>
    </div>
  );
}
