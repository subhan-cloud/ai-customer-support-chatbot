import { GoogleGenAI } from "@google/genai";
import connectDB from "@/lib/mongodb";
// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Your existing POST function
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const history = body.history;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: history,
    });

    return Response.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("Gemini API error:", error);

    return Response.json(
      {
        error: "Gemini is temporarily unavailable. Please try again.",
      },
      { status: 503 }
    );
  }
}