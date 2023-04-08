import { Request, Response, NextFunction } from "express"
import { IncomingTask, TaskFromDb } from "../protocols"
import taskService from "../services/taskService"



async function postTask (req: Request, res: Response, next: NextFunction){
    const task: IncomingTask = res.locals.task
    try {
        await taskService.postTask({task})
        return res.status(201).send("Task registered.")
    
      } catch (err) {
        next(err)
      }
}

async function completeTask (req: Request, res: Response, next: NextFunction){
    const {id} = req.params

    try {
        await taskService.completeTask(Number(id))
        return res.status(201).send("Task completed.")
    
      } catch (err) {
        next(err)
      }
}

async function getAll (req: Request, res: Response, next: NextFunction){

    try {
        const result: TaskFromDb[] = (await taskService.getAllTasks()).rows
        return res.status(200).send(result)
    
      } catch (err) {
        next(err)
      }
}

async function deleteTask (req: Request, res: Response, next: NextFunction){

    const {id} = req.params

    try {
         await taskService.deleteTask(Number(id))
         return res.status(200).send("Task deleted.")
    
      } catch (err) {
        next(err)
      }
}

export {
    postTask,
    completeTask,
    getAll,
    deleteTask
}