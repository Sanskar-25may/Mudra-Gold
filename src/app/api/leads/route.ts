import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check honeypot
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form data",
          fieldErrors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // Database insertion placeholder for Supabase (when env vars are configured)
    // Server logs the lead safely
    console.info("[LEAD_RECEIVED]", {
      name: leadData.name,
      phone: leadData.phone,
      city: leadData.city,
      inquiryType: leadData.inquiryType,
      monthlyScheme: leadData.monthlyScheme,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Lead received successfully",
    });
  } catch (error) {
    console.error("[API_LEADS_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error. Please call our branch." },
      { status: 500 }
    );
  }
}
