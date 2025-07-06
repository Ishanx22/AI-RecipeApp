const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chatgpt", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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", // 🔁 Apni OpenRouter API key paste karo
        "HTTP-Referer": "http://localhost:3000",  // Optional but recommended
        "X-Title": "Recipe-AI-App"                // Optional but recommended
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528:free",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    const reply = data.choices?.[0]?.message?.content || "Kuch nahi mila 😅";
    res.json({ reply });

  } catch (err) {
    console.error("❌ OpenRouter Error:", err);
    res.status(500).json({ error: "Backend Error" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
