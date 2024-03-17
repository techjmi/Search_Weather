import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";
import React, { useState } from "react";
import { fetchData } from "../service/api";
import Loader from "./Loader";
const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
});
const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({setResult}) => {
    const[data, setData]= useState({ city: '', country: '' })
    const[loading, setLoading]= useState(true)
    const handleChange= (e)=>{
        const name= e.target.name
        const value=e.target.value
        setData({
            ...data, [name]:value
        })
    }
    //
    const getWeatherInfo = async()=>{
setLoading(true)
        const response= await fetchData(data.city, data.country)
        setResult(response)
        setLoading(false)
    }
  return (
    <Container className="box_form">
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton
        variant="contained"
        onClick={getWeatherInfo}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
