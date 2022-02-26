import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,

      // clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,

      // clientId:
      //   "655902391975-hbfhrq3u4r63jcggt2ive40b3nmrbeb3.apps.googleusercontent.com",
      // clientSecret: "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",
      //  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,

      clientSecret: process.env.GOOGLE_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
