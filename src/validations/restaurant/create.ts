import { validate, Joi } from "express-validation";

const restaurantCreateValidation = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

export { restaurantCreateValidation };
