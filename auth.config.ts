import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnProtectedPage = nextUrl.pathname.startsWith('/login-success');
        if (isOnProtectedPage) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/login-success', nextUrl));
        }
        return true;
    },
  },
  providers: []
} satisfies NextAuthConfig;