import { Request, Response, NextFunction } from "express"
import { taskSchema } from "../schemas/task.schema.js"
import { IncomingTask } from "../protocols/index.js"

export async function postTaskValidation (req: Request, res: Response, next:NextFunction){

    const task = req.body as IncomingTask

    const validation = taskSchema.validate(task, {abortEarly: false})

    if (validation.error){
        const errors = validation.error.details.map((detail) => detail.message)
        res.status(422).send(errors)
        return
    }

    res.locals.task = task

    next()

}