import { BrowserRouter, Routes, Route } from "react-router-dom"
import Root from "./components/Root/Root"
import Home from "./components/MainContent/HomePage/HomePage"
import AboutPage from "./components/MainContent/AboutPage/AboutPage"
import AskPage from "./components/MainContent/AskPage/AskPage"
import { store } from "./store"
import { Provider } from "react-redux"
import Products from "./components/MainContent/ProductsPage/ProductsPage"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="ask" element={<AskPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
