import { createSlice } from '@reduxjs/toolkit'

export const treeUrlSlice = createSlice({
  name: 'treeUrl',
  initialState: {
    value: []
  },
  reducers: {
    setTreeUrl: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    popUrl: (state, action) => {
      state.value.splice(-1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTreeUrl, popUrl } = treeUrlSlice.actions

export default treeUrlSlice.reducer
