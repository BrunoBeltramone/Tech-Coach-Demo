import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import Detail from "./Detail";
import { DataContext } from "../../context/DataContext";

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

describe("Renderizar el detalle de una Criptomoneda", () => {

  test("Renderizar Todas los itemList del detalle", async () => {
    const setSelectedCrypto = jest.fn();

    render(
      <DataContext.Provider value={{ setSelectedCrypto, cryptoDetail }}>
        <Router>
          <Detail />
        </Router>
      </DataContext.Provider>
    );

    const detailElement = await screen.findAllByRole("listitem");

    expect(detailElement).toHaveLength(8);
  });

  test("Renderizar el precio en el detalle", async () => {
    const setSelectedCrypto = jest.fn();

    render(
      <DataContext.Provider value={{ setSelectedCrypto, cryptoDetail }}>
        <Router>
          <Detail />
        </Router>
      </DataContext.Provider>
    );

    const cryptoName = screen.getByText(/6362.74960614/i);

    expect(cryptoName).toBeInTheDocument();
  });
});
