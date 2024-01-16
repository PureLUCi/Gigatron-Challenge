import { Request, Response, NextFunction } from 'express';

const ValidateFile = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Validated!");
    next();
};

const ResizeImage = async (req: Request, res: Response) => {
    console.log("HERE!");

    return res.json({status:200});
};


export {ResizeImage, ValidateFile};