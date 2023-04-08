import { Request, Response, NextFunction } from "express"
import httpStatus from "http-status"

export function handleApplicationErrors(err, req: Request, res: Response, next: NextFunction){

    if(err.name==="ConflictError" || err.name==="ExistingTaskError"){
        return res.status(httpStatus.CONFLICT).send({message: err.message, email:err.email})
    }

    if(err.name==="NotFoundError"){
        return res.status(httpStatus.NOT_FOUND).send({message: err.message})
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error"
    })

}