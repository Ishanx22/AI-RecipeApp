import React, { useState } from "react";
import "./App.css";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setIngredient(event.target.value);
  }

  function handleAddIngredient() {
    if (ingredient.trim() === "") return;
    setItems((prev) => [...prev, ingredient.trim()]);
    setIngredient("");
  }

  async function handleGetRecipe() {
    setLoading(true);
    setRecipe("");
    const prompt = `Suggest a recipe using these ingredients: ${items.join(", ")}.only tell ingredients , and instructions `;

    try {
      const response = await fetch("http://localhost:5000/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setRecipe(data.reply);
    } catch (err) {
      console.error("Error:", err);
      setRecipe("❌ Failed to fetch recipe");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h2 className="header">👨‍🍳 AI Recipe App</h2>

      <input 
        value={ingredient}
        onChange={handleChange}
        placeholder="Add an ingredient"
      />
      <button className="Add" onClick={handleAddIngredient}>Add</button>
      

      {items.length > 0 && (
  <ul>
    {items.map((item, i) => (
      <li key={i}> {item}</li>
    ))}
  </ul>
)}

      <button className="Submit" onClick={handleGetRecipe} disabled={items.length==0}>Get AI Recipe</button>

      {loading && <p>⏳ Generating recipe...</p>}

      {recipe && (
        <div className="recipe-box">
          <h3>🍽️ Recipe:</h3>
          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{recipe}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
