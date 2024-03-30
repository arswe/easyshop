import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const adminLogin = createAsyncThunk('auth/adminLogin')

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
  },
  reducers: {},

  extraReducers: () => {},
})

export default authReducer.reducer
