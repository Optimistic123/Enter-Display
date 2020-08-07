const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser :true ,useUnifiedTopology: true, useCreateIndex: true}
);


// mongoose
//     .connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB connected'))
//     .catch(err => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection establised successfully');
})


const studentsRouter = require ('./routes/students');
app.use('/students' ,studentsRouter);



app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});