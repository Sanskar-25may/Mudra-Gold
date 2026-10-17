import { siteConfig } from "../src/content/site";
import { homeContent } from "../src/content/home";
import { aboutContent } from "../src/content/about";
import { galleryContent } from "../src/content/gallery";

const isStrict = process.argv.includes("--strict");

console.log("=========================================");
console.log("   Mudra Gold Content Verification Audit  ");
console.log("=========================================\n");

const unverifiedItems: string[] = [];

// Check siteConfig
siteConfig.branches.forEach((b) => {
  if (!b.verified) {
    unverifiedItems.push(`Branch '${b.name}' has unconfirmed address/details (verified: false)`);
  }
});

if (!siteConfig.verifiedClaims.govtAuthorized) {
  unverifiedItems.push("Claim 'Govt Authorized Gold Buyer' is NOT verified yet (verified: false)");
}

// Add needsConfirmation list
siteConfig.needsConfirmation.forEach((item) => {
  unverifiedItems.push(`Needs Confirmation: ${item}`);
});

// Check Home
if (!homeContent.hero.verified) {
  unverifiedItems.push("Home hero claims unverified (legacy copy)");
}
if (!homeContent.swarnVriddhi.verified) {
  unverifiedItems.push("Swarn Vriddhi exact terms unconfirmed");
}

// Check Gallery placeholders
const placeholders = galleryContent.items.filter((item) => item.isPlaceholder);
if (placeholders.length > 0) {
  unverifiedItems.push(
    `${placeholders.length} gallery image(s) are currently placeholders awaiting high-res client photos`
  );
}

if (unverifiedItems.length === 0) {
  console.log("✓ All business facts and claims are verified!");
  process.exit(0);
} else {
  console.log(`Found ${unverifiedItems.length} unverified or placeholder items:\n`);
  unverifiedItems.forEach((item, idx) => {
    console.log(`  [${idx + 1}] ${item}`);
  });
  console.log("\nNote: These must be confirmed with the owner before launch.");

  if (isStrict) {
    console.error("\n❌ FAILED (--strict mode): Cannot ship with unverified content.");
    process.exit(1);
  } else {
    console.log("\n✓ Non-strict check completed.");
    process.exit(0);
  }
}
