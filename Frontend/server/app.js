const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env' });
require('./db/conn');

// Middleware

app.use(bodyParser.json());
app.use(cors({
  origin: ["https://fodrix.com"],
  methods: ["POST", "GET"], 
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(express.json());

// Import routes
const callbackRoutes = require('./routes/callbackRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cityRoutes = require('./routes/cityRoutes');
const partnerRoutes = require('./routes/partnerRoutes');
// const userRoutes = require('./routes/userRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const photographerRoutes = require('./routes/photographerRoutes');
const authRoutes = require('./routes/auth');
const transactionsRouter = require('./routes/transactions');
const authMiddleware = require('./middleware/authMiddleware');
const profileRoutes = require('./routes/profile');

const paymentRoutes = require('./routes/paymentRoutes');


// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/addCallBack', callbackRoutes);
app.use('/getCallbacks', callbackRoutes);
app.use('/contact', contactRoutes);
app.use('/getAllContactSubmissions', contactRoutes);
app.use('/cities', cityRoutes);
app.use('/partner', partnerRoutes);
// app.use('/users', userRoutes);
app.use('/protected', protectedRoutes); // Add protected routes
app.use('/portfolio', portfolioRoutes);
app.use('/photographers', photographerRoutes);
app.use('/auth', authRoutes);
app.use('/profile', authMiddleware);
app.use('/profile', profileRoutes);


// Use the payment route
app.use('/payment', paymentRoutes);

app.use('/transactions', transactionsRouter);
app.use('/transactions/user', transactionsRouter);






const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
