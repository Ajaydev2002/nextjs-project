import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {

    return (
        <Box sx={{position:"fixed",bottom:"0",width:"100%",borderTop:"1px solid rgb(226, 217, 217)",paddingBlock:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",paddingInline:"20px"}}>
                <Typography variant="body2" sx={{fontSize:"13px"}}>© 2025 Shakuro.</Typography>
                <Typography variant="body2" sx={{fontSize:"13px"}}>Design & Develop by Ajay dev</Typography>
            </Box>
        </Box>
    )
}

export default Footer;