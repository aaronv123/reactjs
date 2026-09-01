import React from 'react'
import '../../styles/Home.css'
import { BLOGS } from '../config/Constants'

export default function Home(){
  return (
    <main className="home-page">
      <section className="blog-hero">
        <p className="eyebrow">Aaron's Blog</p>
        <h1>Ideas, stories, and lessons</h1>
        <p>Welcome to my blog about technology, design, and student life.</p>
      </section>

      <section className="blog-section">
        <h2>Latest Posts</h2>
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
    </main>
  )
}
