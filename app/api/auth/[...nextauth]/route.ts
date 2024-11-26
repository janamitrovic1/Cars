import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/prisma";
import LoginSchema from "@/utils/zodschemas/LoginSchema";
import RegisterSchema from "@/utils/zodschemas/RegisterSchema";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "SignIn",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validate = LoginSchema.safeParse(credentials);
          if (!validate.success) 
            return Promise.reject(new Error(validate.error.errors.map(e => e.message).join(", ")));

          const { username, password } = validate.data;

          const user = await prisma.korisnik.findFirst({ where: { username } });

          if (!user) 
            return Promise.reject(new Error("User does not exist"));

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) 
            return Promise.reject(new Error("Invalid credentials"));

          return user; // Return user if authentication is successful
        } catch (error) {
          console.error(error);
          return Promise.reject(new Error("An unknown error occurred during login"));
        }
      },
    }),

    CredentialsProvider({
      id: "SignUp",
      credentials: {
        ime: { label: "Ime", type: "text" },
        prezime: { label: "Prezime", type: "text" },
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        BrTelefona: { label: "Broj telefona", type: "text" },
        password: { label: "Lozinka", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validate = RegisterSchema.safeParse(credentials);
          if (!validate.success) 
            return Promise.reject(new Error(validate.error.errors.map(e => e.message).join(", ")));

          const { ime, prezime, username, email, BrTelefona, password } = validate.data;

          const existingUser = await prisma.korisnik.findFirst({
            where: { username },
          });

          if (existingUser) {
            return Promise.reject(new Error("Username already exists"));
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          const user = await prisma.korisnik.create({
            data: {
              ime,
              prezime,
              username,
              email,
              BrTelefona,
              password: hashedPassword,
            },
          });

          return user; 
        } catch (error) {
          console.error(error);
          return Promise.reject(new Error("An unknown error occurred during registration"));
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token }) {
      const user = await prisma.korisnik.findFirst({ where: { id: token.sub } });
      token.id = user?.id;
      token.name = user?.username;
      return token;
    },
    async session({ session, token } : any) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
