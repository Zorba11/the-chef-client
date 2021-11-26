import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FoodImage from '../assets/food1.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { cartItemsState } from '../atoms/CartItemsState';

const FoodCard = ({menu, foodName}) => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const addToCart = () => {
    setCartItems((oldCartItems) => [
      ...oldCartItems,
      menu
    ]);
  }

  return <Card sx={{ maxWidth: 345 , maxHeight: 310}}>
  <CardMedia
    component="img"
    height="194"
    src={FoodImage}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="h6" color="text.secondary">
      {foodName}
    </Typography>
    <Stack marginTop={1.4} direction="column">
      <Button onClick={addToCart} variant="contained">Order</Button>
    </Stack>
  </CardContent>
</Card>
};

export default FoodCard;
