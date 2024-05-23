import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchExperiences = createAsyncThunk(
  "dragonProducts/fetchExperiences",
  async (arg, thunkAPI) => {
    const response = await fetch(
      "https://project-2.technative.dev.f90.co.uk/products/dragon",
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    )
    const data = await response.json()
    return data
  }
)

export const fetchSearchedProducts = createAsyncThunk(
  "dragonProducts/fetchSearchedProducts",
  async (arg, thunkAPI) => {
    const query = thunkAPI.getState().dragonStore.searchQuery
    const response = await fetch(
      `https://project-2.technative.dev.f90.co.uk/products/dragon?query=${query}`,
      { method: "GET", headers: { Accept: "application/json" } }
    )
    const data = await response.json()
    console.log(data)
    return data
  }
)

export const productSlice = createSlice({
  name: "dragonProducts",
  initialState: {
    dragonExperiences: [],
    isLoading: false,
    hasError: false,
    searchQuery: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.dragonExperiences = action.payload.products
        state.isLoading = false
        state.hasError = false
      })

      .addCase(fetchExperiences.rejected, (state) => {
        state.hasError = true
        state.isLoading = false
      })
      .addCase(fetchSearchedProducts.pending, (state) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(fetchSearchedProducts.fulfilled, (state, action) => {
        state.dragonExperiences = action.payload.products
        state.isLoading = false
        state.hasError = false
      })

      .addCase(fetchSearchedProducts.rejected, (state) => {
        state.hasError = true
        state.isLoading = false
      })
  },
})

export const { setQuery } = productSlice.actions
