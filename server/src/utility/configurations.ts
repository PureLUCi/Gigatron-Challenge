import multer from 'multer';
import path from 'path';


export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedExtensions = /jpeg|jpg|png|gif/;


        const mimetype = allowedExtensions.test(file.mimetype);
        const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(null, false);
    }
});