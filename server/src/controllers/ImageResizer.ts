import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import fs from 'fs';

const EditImage = async (req: Request, res: Response) => {
    const imagePath = "public/"+req.params.image;
    const { width, height, format, shouldDelete, save} = req.query;

    if(save=== "true" && shouldDelete === "true"){
        return res.status(400).json({error:"You can't delete and save image at the same time"});
    }

    if (shouldDelete === 'true') {
        try {
            fs.unlinkSync(imagePath);
            console.log(`[OK] Successfully deleted image at ${imagePath}`);
            return res.status(200).json({status:200,message:"Successfully deleted image"});
        } catch (err) {
            console.error(`[!] Failed to delete image at ${imagePath}:, does not exist...`);
            return res.status(500).json({status:500,message:"Failed to delete image"});
        }
    }

    try {
        let image = sharp(imagePath);

        // If width and height are provided, resize the image
        if (width)  image = image.resize(Number(width));
        if (height) image = image.resize(null, Number(height));

        // Sorry if this is not the most optimal solution, it was 01:00 AM and I was dead :D
        if (format) {
            switch (format) {
                case "png":
                        image = image.toFormat(sharp.format.png);
                    break;
                case "jpg":
                        image = image.toFormat(sharp.format.jpeg);
                    break;  
                case "webp":
                        image = image.toFormat(sharp.format.webp);
                    break;
                default:
                    break;
            }
        }

        const processedImageBuffer = await image.toBuffer();

        if(save === 'true') {
            fs.writeFile(imagePath, processedImageBuffer, (err) => {
                if (err) {
                    console.error(`[!] Failed to save image at ${imagePath}:`, err);
                }
            });
        };
        

        res.setHeader('Content-Type', `image/${format || 'png'}`);
        res.send(processedImageBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing image');
    }
};

export {EditImage};