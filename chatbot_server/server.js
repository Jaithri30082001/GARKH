import express from "express";
import cors from "cors";
require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENAI_API_KEY;

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        // messages: [{ role: "user", content: userMessage }],
        messages: req.body.messages || [
          { role: "user", content: req.body.userMessage },
        ],
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(3001, () => {
  console.log("Chatbot backend running on http://localhost:3001");
});
