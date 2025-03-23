import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Body from "./components/Body.jsx"
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"
import Feed from "./components/Feed.jsx"
import { Provider } from "react-redux"
import store from "./utils/appStore.js"
import Connections from "./components/Connections.jsx"
import Requests from "./components/Requests.jsx"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
