import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { getAllCrypto } from "../../redux/actions";

const CryptoList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCrypto())
  }, [dispatch])

  const cryptocurrencies = useSelector((state) => state.cryptocurrencies)

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Cryptocurrencies App (with Redux)</h1>
      <List>
        {cryptocurrencies?.map((c) => (
          <ListItem key={c.name}>
            <ListItemButton href={`/detail/${c.id}`} >
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
