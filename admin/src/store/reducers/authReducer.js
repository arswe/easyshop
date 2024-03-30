import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const adminLogin = createAsyncThunk('auth/adminLogin', async (info) => {
  console.log(info)
  try {
    const { data } = await apiClient.post('/adminLogin', info, { withCredentials: true })
    console.log(data)
  } catch (error) {
    console.log(error)
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
