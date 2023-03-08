import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import CryptoList from "./components/List/List";
import Detail from "./components/Detail/Detail";

function App() {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Container>
  );
}

export default App;
