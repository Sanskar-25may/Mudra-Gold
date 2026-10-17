import { NextRequest, NextResponse } from "next/server";
import { testimonialSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationResult = testimonialSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid review submission",
          fieldErrors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const reviewData = validationResult.data;

    console.info("[TESTIMONIAL_SUBMITTED_FOR_MODERATION]", {
      name: reviewData.name,
      city: reviewData.city,
      rating: reviewData.rating,
      commentSnippet: reviewData.comment.slice(0, 50),
      approved: false,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Testimonial submitted successfully for moderation",
    });
  } catch (error) {
    console.error("[API_TESTIMONIAL_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
