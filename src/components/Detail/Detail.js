import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";

const Detail = () => {
  const { cryptoDetail, setSelectedCrypto } = useContext(DataContext);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    setSelectedCrypto(id);
    console.log(cryptoDetail);
  }, []);

  const style = {
    width: '100%',
    maxWidth: 600,
    bgcolor: 'background.paper',
  };

  return (
    <div>
      <h3>Cryptocurrencies</h3>
      <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary={`Rank: ${cryptoDetail?.rank}`} />
      </ListItem>
      <Divider />
      <ListItem  divider>
        <ListItemText primary={`Name: ${cryptoDetail?.name}`}/>
      </ListItem>
      <ListItem >
        <ListItemText primary={`Symbol: ${cryptoDetail?.symbol}`} />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText primary={`Price: ${cryptoDetail?.price}`} />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText primary={`Total Supply: ${cryptoDetail?.totalSupply}`} />
      </ListItem>
      <Divider light />
      <ListItemButton onClick={() => window.location.replace(cryptoDetail.websiteUrl)}>
        <ListItemText primary={`Web Site: ${cryptoDetail?.websiteUrl}`} />
      </ListItemButton>
      <Divider light />
      <ListItem >
        <ListItemText primary={`1h% : ${cryptoDetail?.priceChange1h}%`} />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText primary={`24h% : ${cryptoDetail?.priceChange1d}%`} />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText primary={`7d% :  ${ cryptoDetail?.priceChange1w}%`} />
      </ListItem>
    </List>
    </div>
  );
};

export default Detail;
