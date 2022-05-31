import { validate, Joi } from "express-validation";

const clientListOneValidation = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

export { clientListOneValidation };
