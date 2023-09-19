
//import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: "169413049196-ido90aqbssv2bf7vp5se6ql1n9rbtt12.apps.googleusercontent.com",
        clientSecret: "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"
      })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET 
    
  }
  