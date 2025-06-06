import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        // Replace with real logic later
        if (
          credentials.username === "admin" &&
          credentials.password === "admin"
        ) {
          return { id: 1, name: "Admin User", email: "admin@simplyhr.dev" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/", // Redirects to root for login UI
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
