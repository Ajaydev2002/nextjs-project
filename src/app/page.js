"use client"

import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { useRouter } from "next/navigation";

export default function Home() {

  const [inputVal, setInputVal] = useState("");
  
  const { push } = useRouter();

  const handlesubmit = () => {
    push(`/prediction/${inputVal}`);
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      backgroundColor:"#f0f0f0"
    }}>
      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: "20px",border:"1px solid rgb(177, 168, 168)",padding:"30px",borderRadius:"7px",backgroundColor:"#fff",boxShadow: "1px 1px 4px 2px rgb(203, 197, 197)" }}>
        <Box>
          <Typography variant="h4" sx={{ fontSize: "30px", fontWeight: "500" }}>Enter your Name</Typography>
        </Box>
        <Box>
          <TextField
            id="outlined-required"
            label="Enter your name*"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            sx={{
              width: '230px',
              '& .MuiInputBase-root': {
                height: '40px',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiInputLabel-root': {
                fontSize: '14px',
                lineHeight: 1
              },
              '& input': {
                padding: 0, 
              },
            }}
          />
        </Box>
        <Button onClick={handlesubmit}
          sx={{ backgroundColor: "blue", color: "#fff", width: "100%" }}>Submit</Button>
      </Box>
    </Box>
  );
}
