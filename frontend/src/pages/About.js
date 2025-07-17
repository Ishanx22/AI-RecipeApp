import React from "react";
import Header from "../components/Header"; 
import Aurora from "../components/Aurora"; 
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 


export default function About({ onStart }) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="aurora-section">
        <Aurora
          colorStops={["#3d27ff", "#7bff67", "#3d27ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>


            <div style={{height:"50px"}}></div>


      <h2 style={{textAlign:"center",fontSize:"4rem"}}>About our app</h2>


            <div style={{height:"50px"}}></div>

            
      <div   style={{
    background: "rgba(0, 0, 0, 0.4)", 
    padding: "2rem",
    borderRadius: "20px",
    maxWidth: "900px",
    margin: "auto",
  }}><p style={{ fontSize: "1.8rem", color: "white", padding: "0 1rem" }}>
        Recipe Genie is an AI-powered application designed to help you generate
        unique and delicious recipes based on the ingredients you already have.
        Whether you're a beginner in the kitchen or an experienced cook, our
        goal is to make the cooking experience easier, faster, and more
        creative.
      </p>
      <div style={{height:"50px"}}></div>

      <p style={{ fontSize: "1.8rem", color: "white", padding: "0 1rem" ,}}>
        The app works by collecting your listed ingredients and sending them
        through an AI model via an API call. The model processes your input and
        returns a tailored recipe in real-time — all without the need for manual
        searching. This not only saves time but also reduces food waste by
        making the most of what you already have.
      </p></div>
      

      <Footer />
    </>
  );
}
