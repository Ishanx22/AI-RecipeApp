import React from "react";
import Header from "../components/Header"; 
import Aurora from "../components/Aurora"; 
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 




export default function Contact ({ onStart }) {
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
        <h2 style={{fontSize:"4rem",textAlign:"center"}}>📞Contact Us</h2>
         <div style={{height:"50px"}}></div>

         <div style={{
    background: "rgba(0, 0, 0, 0.4)", 
    padding: "2rem",
    borderRadius: "20px",
    maxWidth: "900px",
    margin: "auto",
  }}><p style={{ fontSize: "1.8rem", color: "white", padding: "0 1rem" }}> If you have any questions, feedback, or suggestions regarding Recipe Genie, we’d love to hear from you. Your input helps us improve and make the app even more helpful and enjoyable. </p> 
  <div style={{height:"20px"}}></div>
  <p style={{ fontSize: "1.8rem", color: "white", padding: "0 1rem" }}> You can reach out to us directly via email at <strong>support@recipegenie.ai</strong>. Whether you found a bug, have a recipe idea, or just want to say hi, feel free to drop us a message. </p> 
  <div style={{height:"20px"}}></div>
  <p style={{ fontSize: "1.8rem", color: "white", padding: "0 1rem" }}> We typically respond within 24–48 hours. Thank you for using Recipe Genie and being a part of our growing community! </p>
</div>

      <Footer />
    </>
  );
}



