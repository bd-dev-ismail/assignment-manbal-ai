import { Box, Container } from "@mui/material";
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
    </div>
  );
}

export default App;
