import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { DataContext } from "./context/DataContext";
import { MemoryRouter, Route, Router, Routes  } from "react-router-dom";
import CryptoList from "./components/List/List";
import Detail from "./components/Detail/Detail";
import App from "./App";

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

const cryptoDetail = {
  id: "bitcoin",
  icon: "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f3738cc5df5f59afb57111d67d951170_1.png",
  name: "Bitcoin",
  symbol: "BTC",
  rank: 1,
  price: 6362.74960614,
  priceBtc: 1,
  volume: 4514555849.85,
  marketCap: 110545616313,
  availableSupply: 17373875,
  totalSupply: 17373875,
  priceChange1h: 0.12,
  priceChange1d: -0.56,
  priceChange1w: -1.07,
  websiteUrl: "https://bitcoin.org",
  redditUrl: "https://www.reddit.com/r/bitcoin",
  twitterUrl: "https://twitter.com/btc",
  exp: [
    "https://blockchain.info/",
    "https://live.blockcypher.com/btc/",
    "https://blockchair.com/bitcoin/blocks",
  ],
};

  test("Verificar que se renderice App", async () => {
    const setSelectedCrypto = jest.fn();
  
    render(
      <DataContext.Provider
        value={{ cryptocurrencies, setSelectedCrypto, cryptoDetail: [] }}
      >
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </DataContext.Provider>
    );
  
    const Heading = screen.getByText(/Cryptocurrencies/i);
  
    expect(Heading).toBeInTheDocument();
  });

  
test("Al clickear, cambiar Verificar que la url Cambie", async () => {
 const setSelectedCrypto = jest.fn();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <DataContext.Provider
        value={{ cryptocurrencies, setSelectedCrypto, cryptoDetail }}
      >
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </DataContext.Provider>
    </MemoryRouter>
  );

  const cryptoListItem = screen.getAllByRole('link');
//   console.log(cryptoListItem[0])
  fireEvent.click(cryptoListItem[0]);
  
  expect(setSelectedCrypto).toHaveBeenCalledWith("bitcoin");

  // expect(window.location.pathname).toBe("/detail/bitcoin");
  
});