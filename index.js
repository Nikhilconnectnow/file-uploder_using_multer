const express = require('express')
const multer =require('multer');
const path = require('node:path');
const upload = multer({ dest: 'uploads/',
    fileFilter:(req,file,cb)=>{
        const filetype =/pdf/;
        const mimetype = filetype.test(file.mimetype);

    }
    ,
    limits:{
        fieldSize:10*1024*1024

    }

 })

const app = express();

app.set("view engine", 'ejs')

app.get("/",(req,res)=>{
    res.render('index')
});

app.post("/upload",upload.single('file'),(req,res,next)=>{
    res.render('thank')

})


app.listen(3000,()=>{
    console.log("working")
});

