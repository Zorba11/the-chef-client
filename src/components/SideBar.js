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

const SideBar = () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <h2>Chef Status: </h2>
      </ListItem>
      <Divider component="li" />
      <ListItem>
       <ProgressNotifier/>
      </ListItem>
      <Divider component="li" />
      <ListItem>
      <ProgressNotifier/>
      </ListItem>
    </List>
  );
}

export default SideBar
