import { createSlice } from '@reduxjs/toolkit'

export const wsSlice = createSlice({
  name: 'ws',
  initialState: {
    value: []
  },
  reducers: {
    setWs: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWs } = wsSlice.actions

export default wsSlice.reducer
