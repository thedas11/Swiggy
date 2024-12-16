import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import loggedUserReducer from "./loginSlice"
const appStore = configureStore({

  reducer: {

    cart: cartReducer,
    loggedUser: loggedUserReducer
  
}
})

export default appStore;