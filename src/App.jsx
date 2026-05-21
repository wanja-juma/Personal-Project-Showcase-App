import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/Navigationbar"
import AppRoutes from "./Routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
