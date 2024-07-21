import React, { useState } from 'react';

export default function Admin_add_blog() {
  const categories = ['wedding', 'business', 'baby', 'pre-wedding', 'maternity', 'personal', 'family', 'post-wedding', 'travel', 'other'];

  const [formData, setFormData] = useState({
    title: '',
    titleImage: '',
    titleContent: '',
    authorName: '',
    authorImage: '',
    sections: [
      { heading: '', paragraphs: [''], images: [''] },
    ],
    category: '', // Initialize category as an empty string
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleAddSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { heading: '', paragraphs: [''], images: [''] }],
    });
  };

  const handleRemoveSection = (sectionIndex) => {
    const updatedSections = [...formData.sections];
    updatedSections.splice(sectionIndex, 1);
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleRemoveParagraph = (sectionIndex, paraIndex) => {
    const updatedSections = [...formData.sections];
    updatedSections[sectionIndex].paragraphs.splice(paraIndex, 1);
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleRemoveImage = (sectionIndex, imgIndex) => {
    const updatedSections = [...formData.sections];
    updatedSections[sectionIndex].images.splice(imgIndex, 1);
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Blog post created successfully!');
        alert('Blog post created successfully!');
        setFormData({
          title: '',
          titleImage: '',
          titleContent: '',
          authorName: '',
          authorImage: '',
          sections: [
            { heading: '', paragraphs: [''], images: [''] },
          ],
          category: '', // Reset category to an empty string
        });
      } else {
        console.error('Error creating blog post:', response.statusText);
        alert('Error creating blog post: ' + response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <>
      <h1>Add Blog Post</h1>
      <div className="container my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="titleContent">Title Content</label>
            <input
              type="text"
              className="form-control"
              id="titleContent"
              name="titleContent"
              value={formData.titleContent}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="titleImage">Title Image URL</label>
            <input
              type="text"
              className="form-control"
              id="titleImage"
              name="titleImage"
              value={formData.titleImage}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              className="form-control"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorImage">Author Image URL</label>
            <input
              type="text"
              className="form-control"
              id="authorImage"
              name="authorImage"
              value={formData.authorImage}
              onChange={handleInputChange}
            />
          </div>
          {formData.sections.map((section, index) => (
            <div className="section" key={index}>
              <h3>Section {index + 1}</h3>
              <div className="form-group">
                <label>Heading</label>
                <input
                  type="text"
                  className="form-control"
                  value={section.heading}
                  onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Paragraphs</label>
                {section.paragraphs.map((paragraph, paraIndex) => (
                  <div key={paraIndex}>
                    <input
                      type="text"
                      className="form-control"
                      value={paragraph}
                      onChange={(e) =>
                        handleSectionChange(index, 'paragraphs', [
                          ...section.paragraphs.slice(0, paraIndex),
                          e.target.value,
                          ...section.paragraphs.slice(paraIndex + 1),
                        ])
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveParagraph(index, paraIndex)}
                    >
                      Remove Paragraph
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={() => handleSectionChange(index, 'paragraphs', [...section.paragraphs, ''])}
                >
                  Add Paragraph
                </button>
              </div>
              <div className="form-group">
                <label>Images</label>
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <input
                      type="text"
                      className="form-control"
                      value={image}
                      onChange={(e) =>
                        handleSectionChange(index, 'images', [
                          ...section.images.slice(0, imgIndex),
                          e.target.value,
                          ...section.images.slice(imgIndex + 1),
                        ])
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveImage(index, imgIndex)}
                    >
                      Remove Image
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={() => handleSectionChange(index, 'images', [...section.images, ''])}
                >
                  Add Image URL
                </button>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-danger mb-3"
                onClick={() => handleRemoveSection(index)}
              >
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-sm btn-primary mb-3"
            onClick={handleAddSection}
          >
            Add Section
          </button>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
