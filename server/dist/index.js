"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const ImageResizer_1 = require("./controllers/ImageResizer");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedExtensions = /jpeg|jpg|png|gif/;
        const mimetype = allowedExtensions.test(file.mimetype);
        const extname = allowedExtensions.test(path_1.default.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(null, false);
    }
});
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "File upload failed" });
    }
    return res.status(200).json({ status: 200, imageURL: "http://localhost:1313/" + req.file.filename });
});
app.get('/:image', ImageResizer_1.EditImage);
const port = 1313;
app.listen(port, () => {
    console.log(`[OK] Server running at http://localhost:${port}`);
});
