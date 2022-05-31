import { validate, Joi } from "express-validation";

const clientLoginValidation = validate({
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export { clientLoginValidation };
