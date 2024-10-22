import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { User } from "@/app/lib/user"
import DatabaseGetUser from './app/lib/fakedb';

async function getUser(email : string) : Promise<User | undefined>{
    return DatabaseGetUser(email);
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        if (credentials.email != undefined && credentials.email != "" && credentials.password != undefined && credentials.password != ""){
            var email : string = credentials.email as string;
            const user = await getUser(email);
            console.log(user)
            if (user && credentials.password == user.password){
                return user;
            }
        }
        throw new Error("Wrong email or password.")
    }
  })],
});