import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./app"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
