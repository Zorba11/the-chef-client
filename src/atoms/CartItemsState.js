import {atom} from 'recoil';

const cartItemsState = atom({
  key: 'itemsInCart',
  default: [{ id: '', foodName: ''}]
})

export {cartItemsState};