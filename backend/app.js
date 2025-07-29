const express = require('express');
const cors = require('cors');
const questionRoutes = require('./routes/questionRoutes');
const sectionRoutes = require("./routes/sectionRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api/questions', questionRoutes);
app.use("/api/sections", sectionRoutes);

module.exports = app;