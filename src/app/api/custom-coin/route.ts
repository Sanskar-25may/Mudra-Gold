import { NextRequest, NextResponse } from "next/server";
import { customCoinSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationResult = customCoinSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid coin request data",
          fieldErrors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const coinData = validationResult.data;

    console.info("[CUSTOM_COIN_REQUEST]", {
      name: coinData.name,
      phone: coinData.phone,
      weight: coinData.weightGrams,
      engraveText: coinData.engraveText,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Custom coin request received successfully",
    });
  } catch (error) {
    console.error("[API_CUSTOM_COIN_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error. Please call our branch." },
      { status: 500 }
    );
  }
}
