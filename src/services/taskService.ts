import { existingTask, notFoundTask,  } from "../errors";
import { postTaskRep, getTaskByName, getAllTasksRep, completeTaskRep, getTaskById, deleteTaskRep } from "../repositories/taskRepository";

async function postTask({task}) {

  const {rowCount} = await getTaskByName(task)
  if(rowCount) throw existingTask();

  await postTaskRep(task)

}

async function completeTask(id: number) {

  const {rowCount} = await getTaskById(id)
  if(!rowCount) throw notFoundTask();
  
  await completeTaskRep(id)

}

async function getAllTasks(){
  const result = await getAllTasksRep()
  return result
}

async function deleteTask(id: number) {

  const {rowCount} = await getTaskById(id)
  if(!rowCount) throw notFoundTask();
  
  await deleteTaskRep(id)

}

export default {
  postTask,
  getAllTasks, 
  completeTask,
  deleteTask
};
