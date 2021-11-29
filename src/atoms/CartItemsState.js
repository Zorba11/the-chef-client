import {atom} from 'recoil';

const cartItemsState = atom({
  key: 'itemsInCart',
  default: [{ id: '', foodName: '', count: 0}]
})

export {cartItemsState};