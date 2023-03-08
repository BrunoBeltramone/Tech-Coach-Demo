import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import CryptoList from "./components/List/List";

function App() {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<CryptoList />} />
        </Routes>
      </Container>
  );
}

export default App;
