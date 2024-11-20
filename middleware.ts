export { default } from "next-auth/middleware"

export const config = {
    matcher: [
      /*
       * Match all paths except for:
       * - /login
       * - /register
       */
      "/((?!login|register).*)",
    ],
  };