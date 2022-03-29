import { createSlice } from '@reduxjs/toolkit';

export const Level = createSlice({
  name: 'Level',
  initialState: {
    listLevel: [],
    visible: false,
    reloadTable: false,
    totalPage: 0,
    pageSize: 10,
    searchQuery: '',
  },
  reducers: {
    setListLevel: (state, action) => {
      state.listLevel = action.payload;
    },
    setVisibles: (state, action) => {
      state.visible = action.payload;
    },
    setReloadTable: state => {
      state.reloadTable = !state.reloadTable;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setListLevel,
  setVisibles,
  setReloadTable,
  setTotalPage,
  searchQuery,
} = Level.actions;
export default Level.reducer;
