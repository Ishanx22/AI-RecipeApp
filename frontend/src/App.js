//Main recipe generating page
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Aurora from "./components/Aurora";
import Footer from "./components/Footer";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(event) {
    setIngredient(event.target.value);
  }

  function handleAddIngredient() {
    if (ingredient.trim() === "") return;
    setItems((prev) => [...prev, ingredient.trim()]);
    setIngredient("");
  }
  function handleRemoveLast() {
  setItems((prev) => prev.slice(0, -1));
}

function handleResetList() {
  setItems([]);
}


  function handleCopyRecipe() {
    navigator.clipboard.writeText(recipe);
    alert("📋 Recipe copied to clipboard!");
  }

    async function handleGetRecipe() {
    setLoading(true);
    setRecipe("");
    let prompt = `Suggest a recipe using these ingredients: ${items.join(
      ", "
    )}. Only output the recipe title, ingredients and instructions. Do not include internal thoughts or explanations.`;

    if (calories.trim()) {
      prompt += ` Limit total calories to around ${calories} kcal.`;
    }
    if (protein.trim()) {
      prompt += ` Try to include at least ${protein}g of protein.`;
    }

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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", 
          "HTTP-Referer": "<YOUR_SITE_URL>",               
          "X-Title": "<YOUR_SITE_NAME>",                   
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      const data = await response.json();

      // Extract assistant's reply
      const cleanedReply = data.choices?.[0]?.message?.content
        ?.replace(/<think>[\s\S]*?<\/think>/gi, "")
        .trim();

      setRecipe(cleanedReply || "❌ No recipe returned");
      setShowPopup(true);
    } catch (err) {
      console.error("Error:", err);
      setRecipe("❌ Failed to fetch recipe");
    } finally {
      setLoading(false);
    }
  }


 

  return (
    <>
      <Header />

      <Aurora
        colorStops={["#3d27ff", "#7bff67", "#3d27ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className="App">
        <h2 className="header">Recipe Genie</h2>

        <div className="input-area">
<label style={{ fontSize: "20px", fontWeight: "600", textAlign: "left"}}>
  Add ingredients
</label>
          <input
            value={ingredient}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddIngredient();
            }}
            placeholder="Add an ingredient"
          />

          <div className="optional-inputs">
            <div>
              <label>Calories (kcal)</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="e.g. 500"
              />
            </div>
            <div>
              <label>Protein (g)</label>
              <input
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                placeholder="e.g. 20"
              />
            </div>
          </div>

          

          <div className="button-row">
            <button className="Add" onClick={handleAddIngredient}>
            Add
          </button>
  <button onClick={handleRemoveLast} disabled={items.length === 0}>
    ⛔ Remove Last
  </button>
  <button onClick={handleResetList} disabled={items.length === 0}>
    🔁 Reset
  </button>
  
</div>

        </div>

        {items.length > 0 && (
          <div className="ingredient-list">
            <h4>Ingredients Added:</h4>
            <ul>
              {items.map((item, index) => (
                <li key={index}>✧ {item}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="Submit"
          onClick={handleGetRecipe}
          disabled={items.length === 0}
        >
          Get AI Recipe
        </button>

        {loading && <p>⏳ Generating recipe...</p>}

        {showPopup && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                Close
              </button>
              <button className="copy-btn" onClick={handleCopyRecipe}>
                Copy
              </button>
              <div className="modal-content">
                <h3>🍽️ Recipe</h3>
                <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{recipe}</pre>
              </div>
            </div>
          </div>
        )}

        {recipe && !showPopup && (
          <div className="recipe-box">
            <h3>🍽️ Recipe:</h3>
            <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{recipe}</pre>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
