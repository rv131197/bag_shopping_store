import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // actual local storage object on our window browser
import DirectoryReducer from "./directory/directory.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: DirectoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer) //modified version of root-reducer with persistence capabilities