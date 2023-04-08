import { Router } from "express";
import { postTaskValidation } from "../middlewares/taskMiddleware";
import { postTask, getAll, deleteTask, completeTask } from "../controllers/taskController";

const router = Router()

router.post("/tasks", postTaskValidation, postTask)
router.post("/tasks/:id", completeTask)
router.get("/tasks", getAll)
router.delete("/tasks/:id", deleteTask)


export default router