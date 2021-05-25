import { configureStore } from '@reduxjs/toolkit';
import indexReducer from './Index';



export default configureStore({
  reducer: {
    indexReducer
  }
})