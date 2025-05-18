import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { userModel } from "../models/user_model.js";
import { postModel } from "../models/post_model.js";
  
const dashboard = async (req,res) => {
   
}

const verifyAdmin = async (req,res) => {

    const user = await userModel.findUserById(req.userId)
   
    if (user.is_admin != true) {
        return res.status(403).json({ error: "Access denied" });
    }
    return res.status(200).json({ message: "Access granted" });
}

export const adminController = {
    dashboard,
    verifyAdmin
}