import React from "react";
import "./Landing.css";
import landingImage from "./LandingPhoto.jpg";
import Header from "../components/Header"; 
import Aurora from "../components/Aurora"; 
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";
import ProfileCard from '../components/ProfileCard';
import { useNavigate } from 'react-router-dom';
import SplitText from "../components/SplitText";







export default function Landing({ onStart }) {
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

        <div className="landing-container">
        
          <div className="hero-section">
            <div className="hero-text">
              <div style={{ display: "flex", flexDirection: "column", margin: 0 }}>
  <h1 style={{ margin: 0 ,color:"grey"}}>Create Perfect</h1>
  <h1 style={{ margin: 0 }}>Recipes with AI</h1>
</div>

              <p>Transfer your ingredients into delicious meals.Our AI chef creates personalized recipes based on what you have and your dietary goals.</p>
             <div style={{ display: "flex", gap: "0rem" }}>
  <button className="glow-button" onClick={() => navigate('/app')}>
    Start Cooking
  </button>
  <button className="glow-button" onClick={() => navigate('/about')}>
    Learn More
  </button>
</div>



            </div>

\            <div className="hero-right">
              <ProfileCard showUserInfo={false} enableTilt={true}>
                <div className="dtext" style={{ marginLeft: 0 ,}}>
                  ✦ Tell us what you’ve got — ingredients, calories, protein.<br />
                  <div style={{ height: "10px" }} />
                  ✦ We’ll whip up smart recipes that fit your goals.<br />
                  <div style={{ height: "10px" }} />
                  ✦ AI blends health with taste in every suggestion.<br />
                  <div style={{ height: "10px" }} />
                  ✦ Fuel your body, not just your cravings.
                </div>
              </ProfileCard>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="image-text-flex">
          <div className="hero-image" >
            <img src={landingImage} alt="App preview" />
          </div>

          

          
        </div>

        <div style={{ height: "100px" }} />
      

   <div className="how-section">


        
<div className="stext">
  <SplitText
  text="Why Choose Recipe Genie"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
</div>

<p
  style={{
    fontSize: "1.5rem",      // bigger text
    textAlign: "center",     // center align text
    margin: "0 auto",        // center block itself
    maxWidth: "600px", 
    color:"grey"      // optional: limit line length
  }}
>
  Our intelligent recipe generator makes cooking easier, healthier and more enjoyable.
</p>












        
        <div className="steps-row">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>⭐</span>
    <div>
      <h3>AI-Powered</h3>
      <p>Advanced AI analyzes your ingredients <br></br>and preferences to create unique,<br></br> delicious recipes tailored just for you.</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>💚</span>
    <div>
      <h3>Nutrition Focused</h3>
      <p>Set your calorie and protein <br></br>goals. Get recipes that<br></br> not only taste great but <br></br>also meet your health objectives.</p>
    </div>
  </div>
</SpotlightCard>


          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
  <div className="step-card">
    <span style={{ fontSize: "2rem", background: "none" }}>🕓</span>
    <div>
      <h3>Quick & Easy</h3>
      <p>Get instant recipe suggestions <br></br>in seconds. No more wondering <br></br> what to cook with your available ingredients.</p>
    </div>
  </div>
</SpotlightCard>


          
        </div>

        <br></br>
        <br></br>

        <div style={{ textAlign: "center" }}>
  <h2>Ready to Transform Your Cooking?</h2>
  <br></br>
  <p>
    Join thousands of home cooks who are already creating amazing meals with RecipeAI
  </p>
</div>


        <button onClick={() => navigate('/app')}>Get Started Now</button>
      </div>
      </div>

      <Footer />

    </>
  );
}
