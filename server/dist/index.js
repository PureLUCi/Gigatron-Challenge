"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImageResizer_1 = require("./controllers/ImageResizer");
const app = (0, express_1.default)();
const port = 1313;
app.post('/resize', ImageResizer_1.ValidateFile, ImageResizer_1.ResizeImage);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
