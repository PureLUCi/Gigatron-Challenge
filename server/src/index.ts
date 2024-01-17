import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

import { EditImage } from './controllers/ImageResizer';


const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = /jpeg|jpg|png|gif/;


    const mimetype = allowedExtensions.test(file.mimetype);
    const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(null,false);
  }
});

app.post('/api/upload', upload.single('image'),(req,res)=>{
  if(!req.file){
    return res.status(400).json({error:"File upload failed"});
  }
  
  return res.status(200).json({status:200,imageURL:"http://localhost:1313/"+req.file.filename});
});

app.get('/:image', EditImage);



const port = 1313;

app.listen(port, () => {
  console.log(`[OK] Server running at http://localhost:${port}`);
});
