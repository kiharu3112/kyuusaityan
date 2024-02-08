const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const voicevox_server = process.env.VOICEVOX_SERVER;

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `単位を落としたまたは留年した人が以下のような言葉を言いました。20文字以内で優しく包容力のある返答を考えてください。
  もう疲れた。学校に行きたくない。
  `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
run();
