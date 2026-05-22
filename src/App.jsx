import { BrowserRouter } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import AppRoutes from "./Routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
