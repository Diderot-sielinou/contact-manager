import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer:{
    contactList: cardListReducer
  }
})