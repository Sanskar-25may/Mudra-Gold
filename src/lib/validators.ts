import { z } from "zod";

// Strict Indian phone validation: 10 digits starting with 6-9, optional +91 prefix
export const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name cannot exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .regex(indianPhoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  state: z.string().min(2, "Please select or enter your state"),
  city: z.string().min(2, "Please enter your city"),
  inquiryType: z.enum([
    "sell_gold_silver",
    "gold_coin",
    "silver_coin",
    "custom_gift",
    "other",
  ]),
  monthlyScheme: z.boolean().optional(),
  consent: z
    .boolean()
    .refine((val) => val === true, "You must agree to be contacted via phone or WhatsApp"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name cannot exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .regex(indianPhoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const customCoinSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .regex(indianPhoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  weightGrams: z.number().refine((val) => [2, 5, 10].includes(val), {
    message: "Weight must be 2g, 5g, or 10g",
  }),
  engraveText: z.string().max(60, "Engraved text cannot exceed 60 characters").optional(),
  occasion: z.string().max(80).optional(),
  notes: z.string().max(500).optional(),
});

export type CustomCoinFormData = z.infer<typeof customCoinSchema>;

export const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  city: z.string().min(2, "Please enter your city").max(50),
  rating: z.number().min(1).max(5),
  comment: z
    .string()
    .min(10, "Comment must be at least 10 characters")
    .max(400, "Comment cannot exceed 400 characters"),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;
