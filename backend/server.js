const express=require('express');
const mongoose=require('mongoose');
const app=express();

const port=8000;

const DB_URL='mongodb+srv://mongo111db111:ScT3F0JlnNcrqtQU@merncrudapp.xfbpz.mongodb.net/mernCrud';
mongoose.connect(DB_URL)
.then(()=>{
    console.log('MongoDB Connected');
})
.catch((err)=>console.log('DB connection error',err));


app.listen(port, () =>{
    console.log(App is running on ${port});

});