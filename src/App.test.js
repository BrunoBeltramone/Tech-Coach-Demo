import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail/Detail";
import { DataProvider } from "./context/DataContext";
import userEvent from "@testing-library/user-event"

test("Renderizar las 30 Cryptomonedas", async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = await screen.findAllByRole("listitem");
  expect(linkElement).toHaveLength(30);
});


test("Renderizar el Detail de una Cryptomoneda", async () => {
  render(
    <DataProvider>
      <Detail />
    </DataProvider>
  );
  const detailElement = await screen.findAllByRole("listitem");
  expect(detailElement).toHaveLength(8);
});
