import {atom} from 'recoil';

const menuItemsState = atom({
  key: 'itemsInCart',
  default: { id: '', foodName: ''}
})

export {menuItemsState};