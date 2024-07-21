import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./blog.css"

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your backend API here and update the 'blogs' state
    // Example:
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => {
        // Sort blogs by 'createdAt' in descending order (newest first)
        const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sortedBlogs);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      // Truncate the text and add an ellipsis
      return text.slice(0, maxLength) + '...';
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container-blog m-3">
      <h2 className="text-center font-weight-bold">Read Our latest blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-lg-12 mb-4">
            <div className="card-blog">
              <img
                src={blog.titleImage}
                className="card-img-top img-fluid"
                alt={blog.title}
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title blog-title">{blog.title}</h5>
                <p className="card-text text">{truncateText(blog.titleContent, 250)}</p>
                {/* <div className=" align-items-center">
                  <img
                    src={blog.authorImage}
                    alt={blog.authorName}
                    className="author-image rounded-circle"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                  <span className="author-name ml-2">{blog.authorName}</span>
                  <span className="author-name ml-2">({formatDate(blog.createdAt)})</span>
                </div> */}
                <Link to={`/blog/${blog._id}`} className="btn  btn-dark mt-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
