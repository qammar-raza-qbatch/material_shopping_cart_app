import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_drawer_open: false
}


const cssReducer = createSlice({
  name: 'cssReducer',
  initialState,
  reducers: {
    setDrawerOpen(state) {
      return {
        ...state,
        main_drawer_open: true
      }
    },
    setDrawerClose(state) {
      return {
        ...state,
        main_drawer_open: false
      }
    }
  },
  extraReducers: {

  }
});



export const { setDrawerOpen, setDrawerClose } = cssReducer.actions;
export default cssReducer.reducer;