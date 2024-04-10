import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";

//router object
const router = express.Router();

//Routing
//Register Router | Method - POST

router.post("/register", registerController);

//Login
router.post("/login", loginController);

export default router;
