import express,{Router} from "express"
import { generateHTML } from "../controllers/appController";

const router = Router();

router.use(express.json());

router.post("/sendhtml",generateHTML);

export default router;
