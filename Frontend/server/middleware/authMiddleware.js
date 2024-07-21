const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log('Received token:', token);

    // Check if the token is missing
    if (!token) {
        console.log('Token missing. Access denied.');
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, secretKey);
        console.log('Decoded token:', decoded);
        // Attach the decoded user information to the request object for use in other route handlers
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        // Token verification failed
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;