import { Box, Container } from "@mui/material";
import ForgetPass from "./Components/ForgetPass";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div >
      <Register />

      <Box
        sx={{
          margin: "20rem 0",
        }}
      >
        <Login />
      </Box>
      <Box
        sx={{
          margin: "20rem 0",
        }}
      >
        <ForgetPass />
      </Box>
    </div>
  );
}

export default App;
