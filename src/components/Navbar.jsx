import "./styling/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="bingeq-logo.png" alt="Binge landing page image" />
      <section className="nav-button-container">
        <button className="nav-button">Signup</button>
        <button className="nav-button">About</button>
      </section>
    </nav>
  )
}