import React from 'react'
import '../../styles/Login.css'

export default function Login(){
  return (
    <main className="simple-page">
      <section className="simple-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Login</h1>
        <form className="simple-form">
          <label>Email<input type="email" required /></label>
          <label>Password<input type="password" required /></label>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  )
}
