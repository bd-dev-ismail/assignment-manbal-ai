import { Box, styled } from "@mui/material";
import React from "react";

const RegisterWrapper = styled(Box)(({ theme }) => ({
  height: "768px",
  padding: theme.spacing(4),
  margin: "4rem 0",
}));

const Register = () => {
  return <RegisterWrapper>Register</RegisterWrapper>;
};

export default Register;
