import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid contact form data",
          fieldErrors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const contactData = validationResult.data;

    console.info("[CONTACT_MESSAGE_RECEIVED]", {
      name: contactData.name,
      phone: contactData.phone,
      messageSnippet: contactData.message.slice(0, 50),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.error("[API_CONTACT_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error. Please call our branch." },
      { status: 500 }
    );
  }
}
