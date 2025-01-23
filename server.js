const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Routes
const tasksRouter = require("./routes/tasks");
app.use("/api/tasks", tasksRouter);

app.get("/", (req, res) => {
	res.json({ message: "Hello" });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
