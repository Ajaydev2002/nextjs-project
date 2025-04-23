"use client"
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";


const personalInfo = ({ params }) => {

    const { name } = params; 

    const [ageData, setAgeData] = useState();
    const [genderData, setGenderData] = useState();
    const [nationalityData, setNationalityData] = useState();

    useEffect(() => {
        axios.get(`https://api.agify.io?name=${name}`)
            .then((response) => {
                setAgeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error.message);
            })
    },[name]);

    useEffect(() => {
        axios.get(`https://api.genderize.io?name=${name}`)
            .then((response) => {
                setGenderData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error.message);
            })
    },[name]);

    useEffect(() => {
        axios.get(`https://api.nationalize.io?name=${name}`)
            .then((response) => {
                setNationalityData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error.message);
            })
    },[name]);


    return (
        <Box sx={{marginLeft:"14%"}}>
            <Typography variant="h5">Personal Info</Typography>
            <Typography variant="h6" sx={{fontSize:"17px"}}>Name : {name}</Typography>
            <Typography variant="h6" sx={{fontSize:"17px"}}>Age  : {ageData?.age}</Typography>
            <Typography variant="h6" sx={{fontSize:"17px"}}>Gender  : {genderData?.gender}</Typography>
            <Typography variant="h6" sx={{fontSize:"17px"}}>Nationality  : {nationalityData?.country[0]?.country_id}</Typography>
        </Box>
    )
}

export default personalInfo;