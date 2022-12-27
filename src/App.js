import { Container, Paper } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Paper
      sx={{
        background: "#000",
      }}
    >
      <Container maxWidth="lg">
        <Navbar />
        <Search />
      </Container>
    </Paper>
  );
}

export default App;
