import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';

const initialState = {
  userData: {} as any,
};

const userDatasSlice = createSlice({
  name: 'userDatas',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { getCurrentUser } = userDatasSlice.actions;

export const selectCurrentUserData = (state: RootState) =>
  state.userDatasSlice.userData;
// export const selectUser = (state) => state.userDatasSlice;

export default userDatasSlice.reducer;
