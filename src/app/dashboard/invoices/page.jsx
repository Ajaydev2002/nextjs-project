"use client"
import { Box, Typography } from "@mui/material";
import { useState, useCallback } from "react";

export default function Search() {

    const [query, setQuery] = useState("");
    const [afterDebounce, setAfterDebounce] = useState("");


    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    const handleSearch = (term) => {
        setAfterDebounce(term);
    };


    const debouncedSearch = useCallback(debounce(handleSearch, 1000), []);

    return (
        <Box style={{ marginLeft: "14%" }}>
            <Box>Using the debounce function:</Box>
            <Box>

                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        debouncedSearch(e.target.value);
                    }}
                />
            </Box>
            <Box>
                <Typography variant="body2">Value after debounce after 1 sec</Typography>
                <Typography variant="body1">Value : {afterDebounce}</Typography>
            </Box>
        </Box>
    );
}
