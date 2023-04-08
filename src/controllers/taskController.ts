import { Request, Response } from "express"
import { IncomingTask } from "../protocols"



function postTask (req: Request, res: Response){
    
    const task: IncomingTask = res.locals.task

    


}

export {
    postTask
}