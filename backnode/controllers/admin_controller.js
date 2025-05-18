import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { userModel } from "../models/user_model.js";
import { postModel } from "../models/post_model.js";
  
const dashboard = async (req,res) => {

    // const posts = await postModel.find({ author: user._id }).populate("author", "username");
    const total_posts = await postModel.countTotalPosts();
    const per_books_read  = await postModel.calculateReadPercentage();
    const total_users = await userModel.countTotalUsers();

    return res.status(200).json({
        // posts,
        total_posts,
        per_books_read,
        total_users,
    });
   
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