import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
   
    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    channelId:null,
    channelName:null,

  },
  reducers: {
    setChannelID: (state, action) => {
      state.app += action.payload;
    },
  },
  
});

export const { setChannelID} = appSlice.actions;



export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;
