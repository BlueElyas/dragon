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

export const productSlice = createSlice({
  name: "dragonProducts",
  initialState: {
    dragonExperiences: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setExperiences: (state, action) => {
      state.dragonExperiences = action.payload.results
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
  },
})

export const { setExperiences } = productSlice.actions
export const dragonProductsSelector = (state) =>
  state.dragonStore.dragonExperiences.products
