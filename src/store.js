import { configureStore } from "@reduxjs/toolkit"
import { questionFeatureSlice } from "./components/MainContent/AskPage/QuestionFeature/questionFeatureSlice"

export const store = configureStore({
  reducer: {
    question: questionFeatureSlice.reducer,
  },
})
