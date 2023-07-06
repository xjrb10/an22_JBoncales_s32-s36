// load express for our backend
const express = require('express');
const mongoose = require('mongoose');

// Allows us to control the app's Cross Origin Resource Sharing
const cors = require('cors')
const courseRoutes = require('./routes/courseRoutes');

// we create an app variable that stores results of the express function that initializes our express applciation and allow to access different methods that will make backend creation easy
const app = express();

mongoose.connect("mongodb+srv://202110016:FScXIWohtKlAxpwy@cluster0.mrydiey.mongodb.net/an22_sample_database?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.connection.once("open", () => console.log("Connected to MongoDB Atlas!"));

// Allows all resources to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// define the /users string to be included for all users routes denied in the 'user' route file
app.use('/course', courseRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Running on localhost:${process.env.PORT || 4000}`)
});