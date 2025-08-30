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
        <br></br>
<div style={{ textAlign: "center" }}>
  <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
    Contact Us
  </h1>
  <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem" }}>
    Have questions about RecipeAI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
  </p>
</div>


<br></br>
<br></br>
       <div
  style={{
    background: "rgba(255, 255, 255, 0.08)",  // translucent white
    borderRadius: "1rem",
    padding: "2rem",
    margin: "2rem auto",
    maxWidth: "800px",
    backdropFilter: "blur(12px)",             // frosted glass effect
    WebkitBackdropFilter: "blur(12px)",       // Safari support
    border: "1px solid rgba(255, 255, 255, 0.15)", // subtle glass border
  }}
>
  <h1>Get in Touch</h1>
  <br></br>
  <p>
   We're here to help you make the most of RecipeAI. Whether you have questions, feedback, or need support, don't hesitate to reach out.
  </p>
  <br></br>

<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li style={{ marginBottom: "1.5rem", textAlign: "left" }}>
    <span style={{ fontSize: "1.8rem", marginRight: "0.5rem" }}>📧</span>
    <div style={{ display: "inline-block", verticalAlign: "top" }}>
      <h3 style={{ margin: "0" }}>Email</h3>
      <p style={{ margin: "0.3rem 0 0" }}>
        hello@recipeGenie.com
        <br></br>

We typically respond within 24 hours
      </p>
    </div>
  </li>

  <li style={{ marginBottom: "1.5rem", textAlign: "left" }}>
    <span style={{ fontSize: "1.8rem", marginRight: "0.5rem" }}>📞</span>
    <div style={{ display: "inline-block", verticalAlign: "top" }}>
      <h3 style={{ margin: "0" }}>Phone</h3>
      <p style={{ margin: "0.3rem 0 0" }}>
       +91-623-907-3XXX
       <br></br>

Mon-Fri, 9AM-5PM IST
      </p>
    </div>
  </li>

  <li style={{ marginBottom: "1.5rem", textAlign: "left" }}>
    <span style={{ fontSize: "1.8rem", marginRight: "0.5rem" }}>📍</span>
    <div style={{ display: "inline-block", verticalAlign: "top" }}>
      <h3 style={{ margin: "0" }}>Office</h3>
      <p style={{ margin: "0.3rem 0 0" }}>
        123 Recipe Street
        <br></br>
Chandigarh
<br></br>
India
      </p>
    </div>
  </li>
</ul>

</div>

<br></br>
<br></br>
       <div
  style={{
    background: "rgba(255, 255, 255, 0.08)",  // translucent white
    borderRadius: "1rem",
    padding: "2rem",
    margin: "2rem auto",
    maxWidth: "800px",
    backdropFilter: "blur(12px)",             // frosted glass effect
    WebkitBackdropFilter: "blur(12px)",       // Safari support
    border: "1px solid rgba(255, 255, 255, 0.15)", // subtle glass border
  }}
>
  <h2>Frequently Asked Questions
</h2>
  <br></br>
  <br></br>
  <h3>Q) Is RecipeGenie free to use?</h3>
  <br></br>
  <p>
    Yes! RecipeGenie is completely free to use. Generate as many recipes as you want.
  </p>

  <br></br>
  <br></br>

  <h3>Q) How accurate are the nutritional calculations?</h3>
  <br></br>
  <p>
    Our AI uses comprehensive nutritional databases to provide accurate estimates, but values may vary based on specific ingredients and preparation methods.
  </p>


</div>

      <Footer />
    </>
  );
}



