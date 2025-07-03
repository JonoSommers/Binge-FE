import { useState } from "react"

export default function SignupForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  return (
    <form className="signup-form">
      <label>
        Username: 
        <input
          className="signup-username"
          type="text"
          placeholder="Enter Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password: 
        <input
          className="signup-password"
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        Confirm Password: 
        <input
          className="signup-confirm-password"
          type="password"
          placeholder="Confirm password..."
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
    </form>
  )
}