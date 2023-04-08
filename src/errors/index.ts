export function existingTask(){
    return {
        name: "ExistingTaskError",
        message: "Task already registered."
    }
}

export function notFoundTask(){
    return {
        name: "NotFoundError",
        message: "Task doesn't exist."
    }
}