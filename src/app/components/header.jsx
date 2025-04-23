import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";



const Header = () => {
    return (
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingInline:"20px",borderBottom:"1px solid rgb(226, 217, 217)"}}>
            <Box>
                <img src="/Images/logo.png"/>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"40px"}}>
                <Link href="./aboutus"> <Typography variant="body2" sx={{fontSize:"13px"}}>About Us</Typography> </Link>
                <Typography variant="body2" sx={{fontSize:"13px"}}>Catalog</Typography>
                <Typography variant="body2" sx={{fontSize:"13px"}}>Price</Typography>
                <Typography variant="body2" sx={{fontSize:"13px"}}>Help</Typography>   
            </Box>
            <Box sx={{border:"1px solid grey",paddingInline:"10px",borderRadius:"5px",backgroundColor:"black",color:"white"}}>
                <Typography variant="body1" sx={{fontSize:"13px"}}>Log-in</Typography>
            </Box>
        </Box>
    )
}

export default Header;