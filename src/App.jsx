import { BrowserRouter, Routes, Route } from "react-router-dom"
import Root from "./components/Root/Root"
import Home from "./components/MainContent/Home/Home"
import AboutPage from "./components/MainContent/AboutPage/AboutPage"
import AboutApp from "./components/MainContent/AboutPage/AboutApp/AboutApp"
import AboutTeam from "./components/MainContent/AboutPage/AboutTeam/AboutTeam"
import AskPage from "./components/MainContent/AskPage/AskPage"
import { store } from "./store"
import { Provider } from "react-redux"

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
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
