import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("Authorize called", credentials);
                const { email, password } = credentials;

                if (email === "admin@test.com" && password === "1234") {
                    return {
                        id: "1",
                        name: "Admin",
                        email: "admin@test.com",
                    };
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login", 
    },
    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST };
