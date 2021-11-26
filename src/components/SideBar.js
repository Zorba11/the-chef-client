import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import ProgressNotifier from './ProgressNotifier';
import { useRecoilValue } from 'recoil';
import { cartItemsState } from '../atoms/CartItemsState';

const SideBar = () => {
  const itemsInCart = useRecoilValue(cartItemsState);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
    <ListItem>
        <h2>Items in Cart: </h2>
        {itemsInCart ? (
          <ul>
          {itemsInCart.map(item => (
              <li>{item.foodName}</li>
          ))}
          </ul>
        ) : <h3>No items</h3>}
      </ListItem>
      <ListItem>
        <h2>Chef Status: </h2>
      </ListItem>
      <Divider component="li" />
      <ListItem>
       <ProgressNotifier/>
      </ListItem>
      <Divider component="li" />
      <ListItem>
       Gathering Time: 
      </ListItem>
      <Divider component="li" />
      <ListItem>
       Cooking Time: 
      </ListItem>
    </List>
  );
}

export default SideBar
