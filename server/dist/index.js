"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ImageResizer_1 = require("./controllers/ImageResizer");
const configurations_1 = require("./utility/configurations");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Defining upload to the server ( in index example )
app.post('/api/upload', configurations_1.upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "File upload failed" });
    }
    return res.status(200).json({ status: 200, imageURL: "http://localhost:1313/" + req.file.filename });
});
// Defining image editing ( in controller example )
app.get('/:image', ImageResizer_1.EditImage);
// ^ This is responsible for editing the image and returning it to the user.
const PORT = 1313;
app.listen(PORT, () => {
    console.log(`[OK] Server running at http://localhost:${PORT}`);
});
exports.default = app;
