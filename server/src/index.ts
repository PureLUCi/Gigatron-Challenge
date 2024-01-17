import express from 'express';
import cors from 'cors';

import { EditImage } from './controllers/ImageResizer';
import { upload } from './utility/configurations';


const app = express();
app.use(cors());


// Defining upload to the server ( in index example )
app.post('/api/upload', upload.single('image'),(req,res)=>{
  if(!req.file){
    return res.status(400).json({error:"File upload failed"});
  }
  
  return res.status(200).json({status:200,imageURL:"http://localhost:1313/"+req.file.filename});
});

// Defining image editing ( in controller example )
app.get('/:image', EditImage);
// ^ This is responsible for editing the image and returning it to the user.



const PORT = 1313;
app.listen(PORT, () => {
  console.log(`[OK] Server running at http://localhost:${PORT}`);
});


export default app;