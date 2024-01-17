"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const EditImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = "public/" + req.params.image;
    const { width, height, format, shouldDelete, save } = req.query;
    if (save === "true" && shouldDelete === "true") {
        return res.status(400).json({ error: "You can't delete and save image at the same time" });
    }
    if (shouldDelete === 'true') {
        try {
            fs_1.default.unlinkSync(imagePath);
            console.log(`[OK] Successfully deleted image at ${imagePath}`);
            return res.status(200).json({ status: 200, message: "Successfully deleted image" });
        }
        catch (err) {
            console.error(`[!] Failed to delete image at ${imagePath}:, does not exist...`);
            return res.status(500).json({ status: 500, message: "Failed to delete image" });
        }
    }
    try {
        let image = (0, sharp_1.default)(imagePath);
        // If width and height are provided, resize the image
        if (width)
            image = image.resize(Number(width));
        if (height)
            image = image.resize(null, Number(height));
        // Sorry if this is not the most optimal solution, it was 01:00 AM and I was dead :D
        if (format) {
            switch (format) {
                case "png":
                    image = image.toFormat(sharp_1.default.format.png);
                    break;
                case "jpg":
                    image = image.toFormat(sharp_1.default.format.jpeg);
                    break;
                case "webp":
                    image = image.toFormat(sharp_1.default.format.webp);
                    break;
                default:
                    break;
            }
        }
        const processedImageBuffer = yield image.toBuffer();
        if (save === 'true') {
            fs_1.default.writeFile(imagePath, processedImageBuffer, (err) => {
                if (err) {
                    console.error(`[!] Failed to save image at ${imagePath}:`, err);
                }
            });
        }
        ;
        res.setHeader('Content-Type', `image/${format || 'png'}`);
        res.send(processedImageBuffer);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error processing image');
    }
});
exports.EditImage = EditImage;
