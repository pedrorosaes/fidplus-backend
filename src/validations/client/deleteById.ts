import { validate, Joi } from "express-validation";

const deleteById = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

export { deleteById };
