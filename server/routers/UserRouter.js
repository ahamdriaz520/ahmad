import express from "express";
import { GetallUsers, LoginUser } from "../controllers/UserController.js";
import { ContactUs } from "../controllers/ContactController.js";

const router = express.Router();

router.post('/user',GetallUsers)
router.post('/login',LoginUser)
router.post('/contact',ContactUs)
export default router;
