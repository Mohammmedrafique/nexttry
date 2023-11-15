import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Constants
const PORT = process.env.PORT || 5000;
const MODEL_NAME = "gpt-3.5-turbo";

// Routes
const handleChatRequest = async (request, response, expertType) => {
  try {
    const { chats } = request.body;
    const maxTokens = 5;
    const result = await openai.createChatCompletion({
      model: MODEL_NAME,
      messages: [
        {
          role: "system",
          content: `I want you to act as an expert ${expertType} software developer. You are asked to take my technical interview for the position of a frontend software developer and share your feedback. Ask me one question about React at a time, and wait for my response before moving on to the next question.`,
        },
        ...chats,
      ],
      max_tokens: maxTokens,
    });

    response.json({
      output: result.data.choices[0].message,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
app.get("/", (request, response) => {
  response.send("Hello, this is the root path!");
});

app.post("/react", async (request, response) => {
  await handleChatRequest(request, response, "frontend");
});

app.post("/node", async (request, response) => {
  await handleChatRequest(request, response, "Nodejs");
});

app.post("/java", async (request, response) => {
  await handleChatRequest(request, response, "Java");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
