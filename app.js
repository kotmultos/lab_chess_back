const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {userRouter} = require("./routes");

const app = express();

mongoose.connect('mongodb://localhost:27017/db_chess').then(() => {
    console.log('mongo is connected!');
})

app.use(cors({origin: _configureCors}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter)

app.listen(5000, () => {
    console.log("app listen to port 5000");
})

function _configureCors(origin, callback) {
    return callback(null, true);
}