import React, { useState } from 'react'
import '../../styles/Home.css'
import '../../styles/blogCard.css'
import { BLOGS, STUDENTS } from '../config/Constants'

export default function Home(){
  const [countBlogs, setCountBlogs] = useState(BLOGS.length);

  return (
    <main className="home-page">
      <section className="blog-hero">
        <p className="eyebrow">Aaron's Blog</p>
        <h1>Ideas, stories, and lessons</h1>
        <p>Welcome to my blog about technology, design, and student life.</p>
      </section>

      <section className="blog-section">
        <h2>Authors' Blog</h2>
        <p className="blog-count">Total Blog Count: {countBlogs}</p>
        <div className="blog-grid">
          {BLOGS.map(post => (
            <article className="blog-card" key={post.id}>
              <p className="blog-category">{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <small>{post.date}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="blogCard-section">
        <h2>Students' Blog</h2>
        <div className="blogCard-container">
            {STUDENTS.map((student, idx) => (
              <div className="blogCard" key={student.name || idx}>
                <h3>{student.name}</h3>
                <p>{student.program}</p>
              </div>
            ))}
        </div>
      </section>

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
  )
}
