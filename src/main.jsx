import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import ProductProvider from "./Context/ProductProvider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
)
