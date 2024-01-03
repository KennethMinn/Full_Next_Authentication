import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  // req.auth
  // value -> value
  // !!value -> boolean
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //every check below must be checked step by step

  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

    return null;
  }

  if (!isLoggedIn && !isPublicRoute)
    return Response.redirect(new URL("/auth/login", nextUrl));

  return null;
});

// Optionally, don't invoke Middleware on some paths
// routes in matcher will be invoked by the auth function
// paste the matcher from clerk cuz it's perfect
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
