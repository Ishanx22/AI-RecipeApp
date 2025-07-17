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
              <h1 style={{ margin: 0 }}>Recipe Genie</h1>
              <p>Recipe Genie is your all-in-one AI cooking assistant.<br></br>Add ingredients and get  delicious recipes instantly.</p>
              <button className="glow-button" onClick={() => navigate('/app')}>
                Start →
              </button>
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

        <div className="image-text-flex">
          <div className="hero-image" >
            <img src={landingImage} alt="App preview" />
          </div>

          

          
        </div>

        <div style={{ height: "100px" }} />
      

\      <div className="how-section">


        
<div className="stext">
  <SplitText
  text="How it Works!"
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











        
        <div className="steps-row">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
            <div className="step-card">
              <span>1</span>
              <div>
                <h3>Add Ingredients</h3>
                <p>Enter items you have — fridge, pantry, or freezer.</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
            <div className="step-card">
              <span>2</span>
              <div>
                <h3>AI-Powered Ideas</h3>
                <p>Our AI whips up creative recipe suggestions instantly.</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
            <div className="step-card">
              <span>3</span>
              <div>
                <h3>Choose & Customize</h3>
                <p>Select your favorite and tweak ingredients or steps.</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="white">
            <div className="step-card">
              <span>4</span>
              <div>
                <h3>Cook & Enjoy</h3>
                <p>Save, share, and get cooking—delicious meals await!</p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <button onClick={() => navigate('/app')}>FIND RECIPES</button>
      </div>
      </div>

      <Footer />

    </>
  );
}
