const Portfolio = require('../model/Portfolio');

exports.addImageLink = async (req, res) => {
  const category = req.params.category;
  const links = req.body.links;

  if (!Array.isArray(links) || links.length === 0) {
    return res.status(400).json({ error: 'Image links array is required.' });
  }

  const successfullyAddedLinks = [];
  const invalidLinks = [];

  for (const link of links) {
    if (typeof link === 'string' && link.trim() !== '') {
      try {
        const newImage = await Portfolio.create({ category, link });
        successfullyAddedLinks.push(newImage);
      } catch (err) {
        invalidLinks.push(link);
      }
    } else {
      invalidLinks.push(link);
    }
  }

  const response = {
    success: successfullyAddedLinks.length > 0,
    addedLinks: successfullyAddedLinks,
    invalidLinks: invalidLinks,
  };

  return res.status(201).json(response);
};

exports.getImageLinks = async (req, res) => {
  const category = req.params.category;

  try {
    const imageLinks = await Portfolio.find({ category });
    return res.json(imageLinks);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch image links from the database.' });
  }
};

exports.deleteImageLink = async (req, res) => {
  const category = req.params.category;
  const linkToDelete = req.body.link;

  if (!linkToDelete) {
    return res.status(400).json({ error: 'Image link to delete is required.' });
  }

  try {
    const deleteResult = await Portfolio.deleteOne({ category, link: linkToDelete });
    if (deleteResult.deletedCount > 0) {
      return res.status(200).json({ message: 'Image link deleted successfully.' });
    } else {
      return res.status(404).json({ error: 'Image link not found in the category.' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete image link from the database.' });
  }
};
