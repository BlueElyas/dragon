import { configureStore } from "@reduxjs/toolkit"
import { questionFeatureSlice } from "./components/MainContent/AskPage/QuestionFeature/questionFeatureSlice"
import { productSlice } from "./components/MainContent/Products/productsSlice"

export const store = configureStore({
  reducer: {
    question: questionFeatureSlice.reducer,
    dragonStore: productSlice.reducer,
  },
})
