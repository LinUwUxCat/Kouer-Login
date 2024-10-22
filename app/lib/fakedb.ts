import { User } from "./user"

export default function DatabaseGetUser(email : string) : User | undefined {
    // In a real application you'd use a real database, like SQL ones or prisma or whatever mongoDB is
    var user1 : User = {
        email: "test@test.com",
        password: "12345"
    };
    if (email == user1.email) return user1;
}