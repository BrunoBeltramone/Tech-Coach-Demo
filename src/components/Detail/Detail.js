import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { getOneCrypto } from "../../redux/actions";

const Detail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const cryptoDetail = useSelector((state) => state.cryptoDetail)

  useEffect(() => {
    dispatch(getOneCrypto(id))
    console.log(cryptoDetail);
  }, [dispatch])

  const style = {
    width: '100%',
    maxWidth: 600,
    bgcolor: 'background.paper',
  };

  return (
    <div>
      <h3>Cryptocurrencies App</h3>
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
