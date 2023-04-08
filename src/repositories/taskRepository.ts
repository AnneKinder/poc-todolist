import {db} from '../database/database.connection.js'
import { IncomingTask, TaskFromDb } from '../protocols/index.js'
import { QueryResult } from 'pg'

async function postTaskRep(task: IncomingTask){
   await db.query(` 
    INSERT INTO tasks
    (task)
    VALUES ($1)
    `,[task])
}

async function getTaskByName(task:IncomingTask){
    return await db.query(`
        SELECT  *
        FROM tasks
        WHERE task=$1
    `,[task])
 }

 async function getTaskById(id: number){
    return await db.query(`
        SELECT  *
        FROM tasks
        WHERE id=$1
    `,[id])
 }

 async function completeTaskRep(id: number){
    await db.query(` 
     UPDATE tasks
     SET isdone = true
     WHERE id = $1
     `,[id])
 }
 
 async function getAllTasksRep(): Promise<QueryResult<TaskFromDb>>{
    return await db.query(`
        SELECT  *
        FROM tasks
    `)

 }

 async function deleteTaskRep(id: number){
    await db.query(` 
     DELETE
     FROM tasks
     WHERE id = $1
     `,[id])
 }

export {
    postTaskRep,
    getTaskByName,
    getTaskById,
    completeTaskRep,
    getAllTasksRep,
    deleteTaskRep
}