import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../../services/apiClient'

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',

  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiClient.post('/adminLogin', info, {
        withCredentials: true,
      })

      return fulfillWithValue(data)
    } catch (error) {
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
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = ''
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state, { payload }) => {
        state.loader = true
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.success
      })
  },
})

export const { messageClear } = authReducer.actions

export default authReducer.reducer
