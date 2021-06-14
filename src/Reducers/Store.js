import { configureStore } from '@reduxjs/toolkit';
import indexReducer from './Index';
import cssReducer from './Css-reducer';



export default configureStore({
  reducer: {
    indexReducer,
    cssReducer
  }
})