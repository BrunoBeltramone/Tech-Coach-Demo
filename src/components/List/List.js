import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const CryptoList = () => {

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Cryptocurrencies</h1>
      <List>
          <ListItem >
            <ListItemButton>
              <ListItemText sx={{ width: "50px", textAlign: "center" }}>
                 rank
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                 name
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                symbol
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                price
              </ListItemText>
              <ListItemText sx={{ width: "100px", textAlign: "center" }}>
                price Change
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );
};

export default CryptoList;
