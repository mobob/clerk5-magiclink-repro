import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

const isProtectedRoute = createRouteMatcher(["/manage(.*)", "/venues"]);

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/terms",
  "/privacy",
]);

// jist of the call - dont' do that redirect in the main page, doesn't play nice
// lets make everything protected by default, and figure out another way to redirect folks on / to /venues - possibly by having an actual page there?!

export default clerkMiddleware((auth, request) => {
  // if (isProtectedRoute(request)) {
  //   auth().protect();
  // }

  if (!isPublicRoute(request)) {
    auth().protect();
  }
});
