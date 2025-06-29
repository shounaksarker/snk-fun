import { NextResponse } from "next/server";
import { getFunnyStartupIdea } from "@src/lib/gemini";

export async function POST(req) {
  const body = await req.json();
  const { userIdea, language } = body;

  if (!userIdea || userIdea.length > 50) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const response = await getFunnyStartupIdea(userIdea, language);
    return NextResponse.json({ success: true, idea: response });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: error.status,
      msg: error.message || "Failed to generate idea",
      error,
    });
  }
}
