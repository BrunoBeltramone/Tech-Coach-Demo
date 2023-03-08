import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { Container } from "@mui/material";
import CryptoList from "./components/List/List";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <DataProvider>
      <Container>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Container>
    </DataProvider>
  );
}

export default App;
