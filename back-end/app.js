const express = require('express');
const fis=require('fs');
const path=require('path');
const Parsbdy = require('body-parser');
const mongoose = require('mongoose');

const eventRoutes = require('./routings/EventRoutes');
const userRoutes = require('./routings/UserRoutes');
const clubRoutes=require('./routings/clubroute')


const app = express();
const cors = require("cors");


require("dotenv").config();

const port = process.env.PORT || 5000;
const mongouri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

  app.use(Parsbdy.json());

app.use('/event', eventRoutes);
app.use('/user', userRoutes);
app.use('/club', clubRoutes);
app.get('/',(req,res)=>{
  res.send("welcome to event management system");
})

app.listen(port, function () {
  console.log(`Server is running on port: http://localhost:${port}`);
});
