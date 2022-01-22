export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

        if(existingCartItem){
            return cartItems.map(cartItem => 
                cartItem.id === existingCartItem.id ? 
                {...cartItem, quantity: cartItem.quantity + 1} :
                cartItem
            )
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1}] // quantity property gets attached the first time around since this if block won't run if it's a new item!
}