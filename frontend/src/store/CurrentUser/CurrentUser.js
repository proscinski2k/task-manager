import { createSlice } from '@reduxjs/toolkit'



export const currentUser = createSlice({
  name: 'currentUser',
  initialState: {
    data: {
      save_urk: null,
      access_token: null,
      created_at: null,
      email: null,
      firstname: null,
      id: null,
      lastname: null,
      login: null,
    }
  },
  reducers: {
    setCurrentUser: (state, {payload}) => {
      state.data = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = currentUser.actions;

export default currentUser.reducer;