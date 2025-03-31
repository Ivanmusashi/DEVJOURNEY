import { clerkMiddleware } from "@clerk/nextjs/server";

// Log the Clerk publishable key to verify it's being loaded correctly
console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default clerkMiddleware();

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};