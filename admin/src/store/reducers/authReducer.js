import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../../services/apiClient'

export const adminLogin = createAsyncThunk('auth/adminLogin', async (info) => {
  console.log(info)
  try {
    const { data } = await apiClient.post('/adminLogin', info, {
      withCredentials: true,
    })
    console.log(data)
  } catch (error) {
    console.log(error.response.data)
  }
})

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
