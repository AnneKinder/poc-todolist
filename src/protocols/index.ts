export type IncomingTask = Omit<TaskFromDb, "id" | "isDone">

export type TaskFromDb={
    id: number, 
    task: string,
    isdone: boolean;
}