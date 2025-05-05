"use client"
import { Box } from "@mui/material";
import React from "react";
import Navigation from "../consts/sidenav";
import Link from "next/link";


const Sidebar = ({ children }) => {

    return (
        <Box sx={{ position: "absolute", marginLeft: "7px", borderRight: "1px solid rgb(197, 192, 192)", height: "86.5%", paddingRight: "40px", width: "13%", backgroundColor: "#fff" }}>
            {Navigation.map((item, index) => (
                item.kind === 'header' ? (
                    <Box key={index} sx={{ paddingBlock: "15px" }}>
                        <Box sx={{ fontSize: "11px" }}>{item.title}</Box>
                    </Box>
                ) : (
                    <Box key={index} sx={{ paddingBlock: "5px" }}>
                        <Link href={item.segment}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Box >{item.icon}</Box>
                                <Box >{item.title}</Box>
                            </Box>
                        </Link>
                    </Box>
                )
            ))}
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Sidebar;