import Joi from 'joi'
//Joi validation Schema

export function validateJoi(_reqBody) {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    //this will handle and make validation for email
    email: Joi.string().min(1).max(300).email().required(),
    password: Joi.string().min(1).max(100).required()
  })
  //returns valid schema
  return joiSchema.validate(_reqBody)
}
