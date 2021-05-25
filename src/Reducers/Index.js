import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';


const initialState = {
  initialValue: 0,
  name: 'qammar raza',
  fetching: false
}


const indexReducer = createSlice({
  name: 'initialReducer',
  initialState,
  reducers: {
    increment(state) {
      state.initialValue++
    },
    decrement(state) {
      state.initialValue--;
    }
  },
  extraReducers: {
  }
});


export const { increment, decrement } = indexReducer.actions;
export default indexReducer.reducer;