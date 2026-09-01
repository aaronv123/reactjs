import React from 'react';
import '../../styles/blogCard.css';
import {students} from '../config/Constants';

const BlogCard = () => {
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>{students[0].name}</b></h4>
        <p>{students[0].program}</p>
      </div>
    </div>
  );
};

export default BlogCard;