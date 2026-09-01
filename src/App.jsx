import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/navbar/Header'
import Footer from './components/navbar/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import { STUDENTS } from './components/config/Constants'
import './App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <section className="students-section">
          <h2>Students</h2>
          <div className="student-container">
            <table className="student-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Program</th>
                  <th>Year Level</th>
                </tr>
              </thead>
              <tbody>
                {STUDENTS.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.program}</td>
                    <td>{student.yearLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </Router>
  )
}
