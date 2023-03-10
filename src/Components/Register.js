import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import registerLogo from "../assets/registerlogo.png";
import "./Register.css";
const RegisterContainerWrapper = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(4),
  display: "flex",
  width: "100%",
  
}));

const RegisterWrapper = styled(Box)(({ theme }) => ({
  width: "55vw",
  background: "#E5E5E5",
  height: "auto",
}));

const RegisterButton = styled(Button)({
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
const Register = () => {
  const [role, setRole] = useState("");
  const [client, setClient] = useState("");
  SwiperCore.use([Autoplay]);
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleClient = (e) => {
    setClient(e.target.value);
  };
  return (
    <RegisterContainerWrapper>
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
      <RegisterWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "77px 0",
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
                Register Now!
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
                Create Your Thermelgy Profile
              </Typography>
            </Box>
            <Box component="form">
              <Stack spacing={3}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                />

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="role-label">Role*</InputLabel>
                  <Select
                    labelId="role-label"
                    id="demo-simple-select-autowidth"
                    value={role}
                    onChange={handleChange}
                    autoWidth
                    label="Role*"
                    required
                  >
                    <MenuItem
                      value="User"
                      sx={{
                        width: "485px",
                      }}
                    >
                      User
                    </MenuItem>
                    <MenuItem
                      value="Admin"
                      sx={{
                        width: "485px",
                      }}
                    >
                      Admin
                    </MenuItem>
                    <MenuItem
                      value="Super Admin"
                      sx={{
                        width: "485px",
                      }}
                    >
                      Super Admin
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="clients-label">Clients*</InputLabel>
                  <Select
                    labelId="clients-label"
                    id="client"
                    value={client}
                    onChange={handleClient}
                    autoWidth
                    label="Clients*"
                    required
                  >
                    <MenuItem
                      value="Client -1"
                      sx={{
                        width: "485px",
                      }}
                    >
                      Client -1
                    </MenuItem>
                    <MenuItem
                      value="Client -2"
                      sx={{
                        width: "485px",
                      }}
                    >
                      Client -2
                    </MenuItem>
                    <MenuItem
                      value="Client -3"
                      sx={{
                        width: "485px",
                      }}
                    >
                      Client -3
                    </MenuItem>
                  </Select>
                </FormControl>

                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <RegisterButton variant="contained">Register</RegisterButton>
                </Box>
              </Stack>
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
      </RegisterWrapper>
    </RegisterContainerWrapper>
  );
};

export default Register;
