import express from "express";
import { saveUser, userList, getUser, deleteUser } from "../controller/user.controller.js";
const router = express.Router();

// http://localhost:3000/user/save
router.post("/save",saveUser);
router.get("/list",userList);
router.get("/:id",getUser);
router.delete("/:id",deleteUser);
export default router;