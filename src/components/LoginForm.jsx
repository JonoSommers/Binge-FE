import { useState } from "react"
import "./styling/LoginForm.css"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="login-form">
      <label>
        Username: 
        <input
          className="login-username"
          type="text"
          placeholder="Enter Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password: 
        <input
          className="login-password"
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
    </form>
  )
}