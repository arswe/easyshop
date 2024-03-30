import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../../services/apiClient'

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',

  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info)
    try {
      const { data } = await apiClient.post('/adminLogin', info, {
        withCredentials: true,
      })
      return fulfillWithValue(data)
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state, { payload }) => {
      state.loader = true
    })
    builder.addCase(adminLogin.rejected, (state, { payload }) => {
      state.loader = false
      state.errorMessage = payload.error
    })
  },
})

export default authReducer.reducer
