import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"


export const store = configureStore({
  reducer: {
   user:userReducer,
  },
});

//dont use curly brackets  while importing default exports like here in userReducer