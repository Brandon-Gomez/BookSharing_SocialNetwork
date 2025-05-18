import { userModel } from "../models/user_model.js";

export const checkAdmin = async (req, res, next) => {
    try {
        const user = await userModel.getUserById(req.userId);
        if (!user || !user.is_admin) {
            return res.status(403).json({ message: "Not authorized" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};