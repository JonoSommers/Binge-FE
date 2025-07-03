import LandingPage from "./components/LandingPage.jsx"
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <section className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </section>
  )
}
