"use client";
import { Box } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/profile");
        }
    }

    return (
        <Box sx={{ marginLeft: "13.5%"}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '86vh',
                backgroundColor: "#f0f0f0",
            }}>
                <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: "20px", border: "1px solid rgb(177, 168, 168)", padding: "30px", borderRadius: "7px", backgroundColor: "#fff", boxShadow: "1px 1px 4px 2px rgb(203, 197, 197)" }}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems:"center"}}>
                            <Box>
                                <Box sx={{ display: "flex", gap: "50px" }}>
                                    <label>Enter your Email</label>
                                    <input type="email" name="email" required />
                                </Box>
                                <Box sx={{ display: "flex", gap: "16px",paddingTop:"20px" }}>
                                    <label>Enter your Password</label>
                                    <input type="password" name="password" required />
                                </Box>
                            </Box>
                            <Box>
                                <button type="submit" style={{paddingInline:"15px",paddingBlock:"5px",backgroundColor:"black",color:"#fff",borderRadius:"5px"}}>Login</button>
                            </Box>
                        </Box>
                        {error && <p>{error}</p>}
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
