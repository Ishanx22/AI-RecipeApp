import React from "react";
import Header from "../components/Header"; 
import Aurora from "../components/Aurora"; 
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 
import SpotlightCard from "../components/SpotlightCard";



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
      
<br></br>
<br></br>
<br></br>
<div style={{ textAlign: "center" }}>
  <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
    About RecipeGenie
  </h1>
  <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem" }}>
    We're revolutionizing the way people cook by combining artificial intelligence 
    with culinary expertise to create personalized, nutritious, and delicious meals.
  </p>
</div>

       

<br></br>
<br></br>
<br></br>
<br></br>
       <div
  style={{
    textAlign: "center",
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
  <h1>Our Mission</h1>
  <br></br>
  <p>
    To make healthy, delicious cooking accessible to everyone, regardless of their
    culinary experience. We believe that with the right guidance, anyone can create
    amazing meals using the ingredients they have on hand.
  </p>
</div>

<br></br>
<br></br>
<br></br>
<br></br>

<h1 style={{ textAlign: "center" }}>How RecipeGenie Works</h1>


 <div className="steps-row">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>🧠</span>
    <div>
      <h3>AI Analysis</h3>
      <p>Our advanced AI analyzes your <br></br> ingredients and dietary preferences</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>🎯</span>
    <div>
      <h3>Goal Matching</h3>
      <p>Recipes are tailored to meet your  <br></br>specific calorie and protein targets</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>🍴</span>
    <div>
      <h3>Recipe Creation</h3>
      <p>Generates unique recipes with <br></br> step-by-step cooking instructions</p>
    </div>
  </div>
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>🛡️</span>
    <div>
      <h3>Quality Assured</h3>
      <p>Every recipe is validated for <br></br>nutritional balance and taste</p>
    </div>
  </div>
</SpotlightCard>


          
        </div>

        <br></br><br></br><br></br><br></br>


      <h1 style={{ textAlign: "center" }}>Our Values</h1>

       <div className="steps-row">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <div>
      <h3>Health First</h3>
      <p>We prioritize nutritional value <br></br>and help you make healthier choices <br></br>without sacrificing flavor or enjoyment.</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <div>
      <h3>Accessibility</h3>
      <p>Cooking should be accessible to <br></br>everyone, regardless of skill level,<br></br> budget, or available ingredients.</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <div>
      <h3>Innovation</h3>
      <p>We continuously improve our AI <br></br> to provide better, more creative, and <br></br>personalized recipe suggestions.</p>
    </div>
  </div>
</SpotlightCard>




          
        </div>

        <br></br>
        <br></br><br></br>



        <div
  style={{
    textAlign: "center",
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
  <h1>Built by Food Lovers</h1>
  <br></br>
  <p>
   Our team combines expertise in artificial intelligence, nutrition science, and culinary arts to bring you the best possible cooking experience. We're passionate about food and technology, and we're here to help you discover the joy of cooking.
  </p>
</div>

      






      </div>
   
      

      <Footer />
    </>
  );
}
