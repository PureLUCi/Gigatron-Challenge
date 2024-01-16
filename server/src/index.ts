import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { ResizeImage, ValidateFile } from './controllers/ImageResizer';

const app = express();
const port = 1313;

app.post('/resize', ValidateFile, ResizeImage);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});