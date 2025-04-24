import { Box, Typography } from "@mui/material";
import React from "react";

const getPredicteAge = async (name) => {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    return response.json();
}

const getPredictedGender = async (name) => {
    const response = await fetch(`https://api.genderize.io?name=${name}`);
    return response.json();
}

const getPredictedNationality = async (name) => {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    return response.json();
}

const name = async ({ params }) => {

    const name = params.name;

    const ageData = await getPredicteAge(name);
    const genderData = await getPredictedGender(name);
    const nationalityData = await getPredictedNationality(name);

    return (
            <Box sx={{ marginLeft: "14%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h5" sx={{ textDecoration: "underline" }}>Personal Info</Typography>
                    <Typography variant="h6" sx={{ fontSize: "14px" }}>Name : {params.name}</Typography>
                    <Typography variant="h6" sx={{ fontSize: "14px" }}>Age  : {ageData?.age ? ageData?.age : 0}</Typography>
                    <Typography variant="h6" sx={{ fontSize: "14px" }}>Gender  : {genderData?.gender ? genderData?.gender : ""}</Typography>
                    <Typography variant="h6" sx={{ fontSize: "14px" }}>Nationality  : {nationalityData?.country?.length > 0 ? nationalityData?.country[0]?.country_id : ""}</Typography>
                </Box>
            </Box>
    )
}

export default name;