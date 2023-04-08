import joi from 'joi'

export const taskSchema = joi.object({
    task: joi.string().required()
})