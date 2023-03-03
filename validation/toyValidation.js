import Joi from 'joi'
// Joi validator to make checks that requests sended to DB are valid for created schema
export function validateJoi(_reqBody) {
  //New schema object for valiation which contains all limitations for PUT and POST CRUD requests

  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(150).required(),
    info: Joi.string().min(2).max(150).required(),
    category: Joi.string().min(2).max(150).required(),
    img_url: Joi.string().min(2).max(150).allow(null, ''),
    price: Joi.number().min(2).max(150).required()
  })
  return joiSchema.validate(_reqBody)
}
