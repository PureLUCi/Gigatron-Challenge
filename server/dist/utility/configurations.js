"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
exports.upload = (0, multer_1.default)({
    storage: exports.storage,
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
