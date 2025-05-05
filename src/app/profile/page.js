import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth()

    if (!session) {
        redirect('/login')
    }

    return (
        <div style={{padding:"20px"}}>
            <h1>Welcome, {session.user?.name}</h1>
            <p>Email: {session.user?.email}</p>
        </div>
    )
}