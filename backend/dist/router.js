"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postUploadsController_1 = __importDefault(require("./controllers/uploads/postUploadsController"));
const storage_1 = __importDefault(require("./storage"));
const router = (0, express_1.Router)();
router.post("/uploads", storage_1.default.single("file"), postUploadsController_1.default);
exports.default = router;
