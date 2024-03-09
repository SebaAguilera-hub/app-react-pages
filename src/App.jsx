import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"
import { NavbarComponent } from "./components/NavBar"


function App() {


  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/app-react-pages/" element={<Home />}/>
        <Route path="/app-react-pages/movies" element={<Movies />}/>
        <Route path="/app-react-pages/*" element={<Navigate to="/app-react-pages/" />} />
      </Routes>
    </>
  )
}

export default App
