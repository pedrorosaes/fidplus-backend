import { validate, Joi } from "express-validation";

const listAllByIdValidation = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

export { listAllByIdValidation };
