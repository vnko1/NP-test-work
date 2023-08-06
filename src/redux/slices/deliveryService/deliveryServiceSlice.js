import { createSlice } from "@reduxjs/toolkit";

const delivertServiceSlice = createSlice({
  name: "delivertService",
  initialState: { currentCity: "", trackCodesData: [] },
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
    addTrackCodesData(state, action) {
      const isIncluded = state.trackCodesData.some(
        (item) => item.trackCode === action.payload.trackCode
      );

      if (!isIncluded)
        state.trackCodesData = [...state.trackCodesData, action.payload];
    },
    deleteTrackCodesData(state, action) {
      state.trackCodesData = state.trackCodesData.filter(
        (el) => el.trackCode !== action.payload
      );
    },
    clearTrackCodesData(state) {
      state.trackCodesData = [];
    },
  },
});

export const {
  setCurrentCity,
  addTrackCodesData,
  deleteTrackCodesData,
  clearTrackCodesData,
} = delivertServiceSlice.actions;
export const delivertServiceReducer = delivertServiceSlice.reducer;
