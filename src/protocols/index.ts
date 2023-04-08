export type IncomingTask ={
task: string;
}

export type TaskFromDb={
    id: number, 
    task: string,
    isDone: boolean;
}