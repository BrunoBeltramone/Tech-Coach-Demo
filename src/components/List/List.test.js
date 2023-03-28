import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import { DataContext } from "../../context/DataContext";
import CryptoList from "./List";
import { MemoryRouter } from "react-router-dom";

const cryptocurrencies = [
  {
    id: "bitcoin",
    rank: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: 56872.78,
    priceChange1d: "0.10",
  },
  {
    id: "ethereum",
    rank: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: 22222.78,
    priceChange1d: "0.23",
  },
];

describe("Renderizado de Componentes", () => {
  test("Renderizar Dos Items", async () => {
    const setSelectedCrypto = jest.fn();

    render(
      <DataContext.Provider
        value={{ cryptocurrencies, setSelectedCrypto, cryptoDetail: [] }}
      >
        <Router>
          <CryptoList />
        </Router>
      </DataContext.Provider>
    );

    const detailElement = await screen.findAllByRole("listitem");

    expect(detailElement).toHaveLength(2);
  });

  test("Verificar los datos de los dos Primeros Items", async () => {
    const setSelectedCrypto = jest.fn();

    render(
      <DataContext.Provider
        value={{ cryptocurrencies, setSelectedCrypto, cryptoDetail: [] }}
      >
        <Router>
          <CryptoList />
        </Router>
      </DataContext.Provider>
    );

    const cryptoName = screen.getByText(/Bitcoin/i);
    const cryptoName2 = screen.getByText(/Ethereum/i);

    expect(cryptoName).toBeInTheDocument();
    expect(cryptoName2).toBeInTheDocument();
  });
});
