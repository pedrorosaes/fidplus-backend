import { validate, Joi } from "express-validation";

const updateClientById = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
  }),
});

export { updateClientById };
