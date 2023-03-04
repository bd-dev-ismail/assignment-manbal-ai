import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Pagination } from "swiper";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import registerLogo from "../assets/registerlogo.png";

const LoginContainerWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const LoginWrapper = styled(Box)(({ theme }) => ({
  width: "55vw",
  background: "#E5E5E5",
}));

const LoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 18,
  fontWeight: 700,
  width: "132px",
  height: "75px",
  border: "1px solid",
  lineHeight: "150%",
  backgroundColor: "#061242",

  "&:hover": {
    backgroundColor: "#061242",

    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#061242",
  },
});
const ForgetPass = () => {
  SwiperCore.use([Autoplay]);
  return (
    <LoginContainerWrapper>
      <Box
        sx={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #FF9859 0%, #DE5D0F 100%)",
          height: "100vh",
          width: "45vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "800",
            color: "#012561",
            lineHeight: "150%",
            textAlign: "center",
            marginTop: "86px",
          }}
        >
          tMY
          <span
            style={{
              color: "#fff",
            }}
          >
            {" "}
            Thermelgy AI
          </span>{" "}
          Platform
        </Typography>
        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={3}
            sx={{
              color: "#fff",
            }}
          >
            <Typography>Revenue Secure</Typography>
            <Typography
              sx={{
                width: "4px",
                height: "4px",
                background: "#fff",
              }}
            ></Typography>
            <Typography>Energy Secure</Typography>
            <Typography
              sx={{
                width: "4px",
                height: "4px",
                background: "#fff",
              }}
            ></Typography>
            <Typography>Future Secure</Typography>
          </Stack>
        </Box>
        <Swiper
          pagination={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
          style={{
            marginTop: "2rem",
          }}
        >
          <SwiperSlide>
            <Box
              sx={{ display: "grid", placeItems: "center", marginTop: "40px" }}
            >
              <img
                src={img1}
                alt=""
                style={{
                  width: "330px",
                  height: "330px",
                }}
              />
            </Box>
            <Box
              sx={{
                margin: "4rem 0",
                textAlign: "center",
                height: "85px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "28px",
                  color: "#012561",
                }}
              >
                T<span style={{ color: "#fff" }}>race</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#fff",
                  marginTop: "1.5rem",
                }}
              >
                Relevant and Accurate Measurement
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ display: "grid", placeItems: "center", marginTop: "40px" }}
            >
              <img
                src={img2}
                alt=""
                style={{
                  width: "330px",
                  height: "330px",
                }}
              />
            </Box>
            <Box
              sx={{
                margin: "4rem 0",
                textAlign: "center",
                height: "85px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "28px",
                  color: "#012561",
                }}
              >
                M<span style={{ color: "#fff" }}>onitor</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#fff",
                  marginTop: "1.5rem",
                }}
              >
                Micro-Services Enabled Automatic Analytics
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ display: "grid", placeItems: "center", marginTop: "40px" }}
            >
              <img
                src={img3}
                alt=""
                style={{
                  width: "330px",
                  height: "330px",
                }}
              />
            </Box>
            <Box
              sx={{
                margin: "4rem 0",
                textAlign: "center",
                height: "85px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "28px",
                  color: "#012561",
                }}
              >
                Y<span style={{ color: "#fff" }}>ield</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#fff",
                  marginTop: "1.5rem",
                }}
              >
                Fast, Impactful &Personalized
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <LoginWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "130px 0",
          }}
        >
          <Box
            sx={{
              width: "495px",
              maxHeight: "100vh",
            }}
          >
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <img
                src={registerLogo}
                alt=""
                style={{
                  width: "263px",
                  height: "57px",
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "56px",
                marginBottom: "3rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  lineHeight: "28px",
                  color: "#2C2C2C",
                }}
              >
                Forgot Password!
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "19px",
                  color: "#545B69",
                  marginTop: "12px",
                }}
              >
                Enter Your Email Address
              </Typography>
            </Box>
            <Box component="form">
              
              
                <TextField
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
               
                <Box
                  sx={{
                    width: "117",
                  }}
                >
                </Box>
            
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  marginTop: "5rem",
                }}
              >
                <LoginButton variant="contained">Submit</LoginButton>
              </Box>
            </Box>
          </Box>

          {/* After Clicking Register button  */}
          {/* <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#012560",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "10rem",
              }}
            >
              We send you a verification link. <br /> Please check your mail
              inbox & spam floder.
            </Typography>
          </Box> */}
        </Box>
      </LoginWrapper>
    </LoginContainerWrapper>
  );
};

export default ForgetPass;
