import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";
import img1 from "../assets/Group 8003.png";
import img2 from '../assets/google-icon 1.png'
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaApple } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const nav=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (email.trim() === "") {
      setEmailError("Please enter an email address");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); 
    }
  
    if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long");
    } else {
      setPasswordError(""); 
    }
  
    if (email.trim() !== "" && password.length >= 5) {
      nav('/userhome'); 
  };
}
  return (
    <div className="container d-flex" style={{ margin: "0", padding: "0" }}>
      <div
        className="left-pane"
        style={{backgroundColor: "rgb(96, 91, 255)",transform: "skew(-8deg)",height: "100vh",width: "50vw",marginLeft: "-4vw",
        }}
      >
        <div style={{ transform: "skew(8deg)" }}>
          <img
            src={img1}
            style={{ height: "60px", width: "65px", margin: "40px 70px" }}
          />
          <h1
            style={{
              paddingTop: "19vh",paddingLeft: "20vw",color: "white",fontWeight: "700",fontSize: "55px",
            }}
          >
            BASE
          </h1>
          <div
            className="iconshead d-flex"
            style={{
              color: "white",margin: "20vw",paddingLeft: "-20px",marginTop: "30vh",
            }}
          >
            <FaGithub
              className="social me-5"
              style={{ height: "30px", width: "30px" }}
            />
            <AiFillTwitterCircle
              className="social me-5 "
              style={{ height: "35px", width: "35px", marginTop: "-3px" }}
            />
            <FaLinkedin
              className="social me-5"
              style={{ height: "30px", width: "30px" }}
            />
            <IoLogoDiscord
              className="social"
              style={{ height: "35px", width: "35px", marginTop: "-1px" }}
            />
          </div>
        </div>
      </div>
      <div className="right-pane">
        <div style={{ marginLeft:'8vw' ,marginTop:'15vh'}}>
          <h2 style={{ fontWeight: "700" }}>Sign In</h2>
          <h6 className="mb-3">Sign in to your account</h6>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<img src={img2} style={{height:'14px', width:'14px'}}/>} style={{ border: 'none', backgroundColor: '#fafafa', fontSize: '15px', textTransform: 'none', width: '200px',  color:'rgb(133,133,133)'}}>
              Sign in with Google
            </Button>
            <Button variant="outlined" startIcon={<FaApple style={{ color: 'rgb(153,153,153)' }} />} style={{ border: 'none', backgroundColor: '#fafafa', fontSize: '15px', textTransform: 'none', width: '200px',color:'rgb(133,133,133)' }}>
              Sign in with Apple
            </Button>
          </Stack>
          
        </div>
        <div style={{width:'33vw', marginLeft:'8vw'}}>
          <form  onSubmit={handleSubmit} style={{ padding: '20px', borderRadius: '8px' }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '8px', 
                marginBottom: '10px', 
                backgroundColor: '#f2f2f2', 
                border: 'none', 
                borderRadius: '10px',
                color: 'black' 
              }} 
            />
            <br />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            <br />

            <label htmlFor="password">Password:</label>
            
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '8px', 
                marginBottom: '20px', 
                backgroundColor: '#f2f2f2', 
                border: 'none', 
                borderRadius: '10px',
                color: 'black' 
              }} 
            />
            <br />
            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
            <br />
            <div><a href="#">Forgot password?</a></div><br/>

            <Button variant="contained" type="submit" fullWidth style={{ backgroundColor: 'rgb(96, 91, 255)', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
              Submit
            </Button>
          </form>
          <div className="text-center">Don’t have an account? <a href="#">Register here </a></div>
        </div>
      </div>
    </div>
  );
}

export default Login;