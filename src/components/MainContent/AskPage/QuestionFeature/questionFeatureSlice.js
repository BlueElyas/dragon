import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchResults = createAsyncThunk(
  "question/fetchResults",
  async (arg, thunkAPI) => {
    const question = thunkAPI.getState().question.question
    const response = await fetch(
      `https://project-2.technative.dev.f90.co.uk/ai/dragon?query=${question}`,
      { method: "GET", headers: { Accept: "application/json" } }
    )
    const data = await response.json()
    return data
  }
)

export const questionFeatureSlice = createSlice({
  name: "question",
  initialState: {
    question: "",
    results: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.results = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(fetchResults.pending, (state) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(fetchResults.rejected, (state) => {
        state.hasError = true
        state.isLoading = false
      })
  },
})

export const selectQuestion = (state) => state.question.question
export const { setQuestion } = questionFeatureSlice.actions
