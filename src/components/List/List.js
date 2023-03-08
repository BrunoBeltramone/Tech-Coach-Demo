import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { DataContext } from "../../context/DataContext";

const CryptoList = () => {

  const { cryptocurrencies, setSelectedCrypto } = useContext(DataContext);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Cryptocurrencies</h1>
      <List>
        {cryptocurrencies?.map((c) => (
          <ListItem key={c.name}>
            <ListItemButton onClick={() => setSelectedCrypto(c.id)} href={`/detail/${c.id}`} >
              <ListItemText sx={{ width: "50px", textAlign: "center" }}>
                 {c.rank}
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                 {c.name}
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                {c.symbol}
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                $ {c.price.toFixed(2)}
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                {c.priceChange1d} %
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CryptoList;
