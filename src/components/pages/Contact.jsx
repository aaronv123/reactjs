import React from 'react'
import '../../styles/Contact.css'

export default function Contact(){
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have a question or need help? Send us a message and we'll get back to you soon.</p>
      </section>
      <section className="contact-content">
        <div className="contact-details">
          <h2>Get in touch</h2>
          <p>We'd love to hear from you. Reach out using the form or contact us directly.</p>
          <p><strong>Email:</strong> aaronvincepenentrante@gmail.com</p>
          <p><strong>Phone:</strong> (63+) 0995-546-2325</p>
        </div>
        <form className="contact-form">
          <label>Name<input name="name" type="text" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  )
}
