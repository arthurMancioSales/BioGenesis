import JWT from "jsonwebtoken";
import { config } from "dotenv";

config();

// @author: {Arthur}
export default function authenticateUser(req, res, next) {
    try {
        JWT.verify(
            req.cookies.session,
            process.env.JWT_SECRET
        );
        next();
    } catch (error) {
        res.status(403).redirect("/")
    }
}
