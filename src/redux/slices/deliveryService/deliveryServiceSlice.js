import { createSlice } from "@reduxjs/toolkit";

const delivertServiceSlice = createSlice({
  name: "delivertService",
  initialState: { currentTrackCode: "", currentCity: "", trackCodesData: [] },
  reducers: {
    setCurrentTrackCode(state, action) {
      state.currentTrackCode = action.payload;
    },
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
    addTrackCodesData(state, action) {
      state.trackCodesData = [...state.trackCodesData, action.payload];
    },
    deleteTweetId(state, action) {
      state.trackCodesData = state.trackCodesData.filter(
        (el) => el !== action.payload
      );
    },
  },
});

export const {
  setCurrentTrackCode,
  setCurrentCity,
  addTrackCodesData,
  deleteTweetId,
} = delivertServiceSlice.actions;
export const delivertServiceReducer = delivertServiceSlice.reducer;
