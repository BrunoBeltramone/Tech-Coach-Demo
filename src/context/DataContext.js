import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [cryptocurrencies, setCryptocurrencies] = useState();
  const [selectedCrypto, setSelectedCrypto] = useState()
  const [cryptoDetail, setCryptoDetail] = useState([])

  useEffect(() => {
    fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD"
    )
      .then((response) => response.json())
      .then((data) => setCryptocurrencies(data.coins));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/coins/${selectedCrypto}?currency=USD`
    )
      .then((response) => response.json())
      .then((data) => setCryptoDetail(data.coin));
  }, [selectedCrypto]);

  return (
    <DataContext.Provider value={{
        cryptocurrencies, 
        setCryptocurrencies,
        selectedCrypto,
        setSelectedCrypto,
        cryptoDetail
    }}>
      {children}
    </DataContext.Provider>
  );
};
