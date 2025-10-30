import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(process.env.WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return NextResponse.json({
         response: data.response || "Sorry, no response from LLM or Trial Ended.",
    });
  } catch (error) {
    console.error("Error in webhook request:", error);
    return NextResponse.json({ response: "Webhook request failed" }, { status: 500 });
  }
}


