import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./blog.css"

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the specific blog post by ID from your backend API
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data); // Update the state with the fetched blog data
      })
      .catch((error) => {
        console.error('Error fetching blog:', error);
      });
  }, [id]); // Include id in the dependency array to refetch data when id changes

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container-blog m-3">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          {blog ? ( // Check if blog data has been loaded
            <>
              <h2 className="title-blog text-center font-weight-bold ">{blog.title}</h2>
              <img
                src={blog.titleImage}
                alt={blog.title}
                className=" card-img-top img-fluid my-4"
                style={{  objectFit: 'cover' }}
              />
              <div className=" card-text mb-4">{blog.titleContent}</div>

              {/* Render sections */}
              <div className='blog-section'>
              {blog.sections.map((section, index) => (
                <div key={index}>
                  <h2 className='section-heading my-2 '>{section.heading}</h2>
                  
                  {section.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`Section Image ${imgIndex + 1}`}
                      className="img-fluid my-3"
                      style={{ maxHeight: '350px',width:"100%", objectFit: 'cover' }}
                    />
                  ))}
                  <p className='card-text'>{section.paragraphs.join(' ')}</p>
                </div>
              ))}

             </div>

              <div className="author-info mt-4">
                <div className="d-flex align-items-center">
                  <img
                    src={blog.authorImage}
                    alt={blog.authorName}
                    className="author-image rounded-circle mb-2"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                  <span className="author-name ml-2">{blog.authorName}</span>
                   <span className="author-name ml-2"> ({formatDate(blog.createdAt)})</span>
                </div>
              </div>
              {/* <div className="author-info mt-4">
                <span className="author-name ml-2">Published on {formatDate(blog.createdAt)}</span>
              </div> */}
            </>
          ) : (
            // Display a loading message while data is being fetched
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
