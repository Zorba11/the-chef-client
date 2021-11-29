import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
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
import { chefStatusState } from '../atoms/ChefStatusState'

import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8090/chef-socket';

const SideBar = () => {
  const [gatheringTime, setGatheringTime] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);

  const [chefStatus, setChefStatus] = useRecoilState(chefStatusState);

  let counter = 0


  // sockjs methods
  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
      console.log(msg);
    setChefStatus(msg)
  }

  const itemsInCart = useRecoilValue(cartItemsState);

  const startTimer = (e) => {
    e.preventDefault();
     setInterval(() => {
       counter++;
       setGatheringTime(counter);
     }, 200)
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
    <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={msg => onMessageReceived(msg)}
        debug={false}
      />
    <ListItem className="cart-list">
        <h2>Items in Cart: </h2>
        <div>
        {itemsInCart.length > 0 ? (
          <ul>
          {itemsInCart.map(item => (
              (item.foodName) ? (<li key={item.id}>{item.foodName}</li>) : null
          ))}
          </ul>
        ) : <h3>No items</h3>}
        </div>
      </ListItem>
      <ListItem>
        <h2>Chef Status:  </h2>
      </ListItem>
      <Divider component="li" />
      <ListItem>
       <ProgressNotifier/>
      </ListItem>
      <Divider component="li" />
      <ListItem onClick={startTimer}>
       Gathering Time: {gatheringTime}
      </ListItem>
      <Divider component="li" />
      <ListItem>
       Cooking Time: {cookingTime}
      </ListItem>
    </List>
  );
}

export default SideBar
