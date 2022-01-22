import {createSelector} from 'reselect';

const selectCart = state => state.cart; //input selector, starts from select

export const selectCartItems = createSelector( //output selector, it's a memoize function
    [selectCart],
    cart => cart.cartItems
) 

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity+cartItem.quantity, 0)
)