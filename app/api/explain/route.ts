import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Please enter a topic" },
        { status: 400 },
      );
    }

    const prompt = `Explain ${topic} in very simple terms for a school student in 4 sentences.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;

    return NextResponse.json({
      explanation: text,
    });
  } catch (error: any) {
    console.error("FULL GEMINI ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Unknown Gemini error",
      },
      { status: 500 },
    );
  }
}
