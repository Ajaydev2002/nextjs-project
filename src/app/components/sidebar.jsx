import { Box } from "@mui/material";
import React from "react";
import Navigation from "../consts/sidenav";


const Sidebar = () => {
    return (
        <Box sx={{position:"absolute",marginLeft:"7px",borderRight:"1px solid rgb(197, 192, 192)",height:"86.5%",paddingRight:"40px",width:"13%"}}>
            {Navigation.map((item, index) => (
                item.kind === 'header' ? (
                    <Box key={index} sx={{paddingBlock:"15px"}}>
                        <Box sx={{fontSize:"11px"}}>{item.title}</Box>
                    </Box>
                ) : (
                    <Box key={index} sx={{display:"flex",alignItems:"center",gap:"10px",paddingBlock:"5px"}}>
                        <Box >{item.icon}</Box>
                        <Box >{item.title}</Box>
                    </Box>
                )
            ))}
        </Box>
    )
}

export default Sidebar;