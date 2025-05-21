import {Router} from "express"
import { login } from "../controllers/loginController";

const router = Router();


router.get("/",login);

export default router;
