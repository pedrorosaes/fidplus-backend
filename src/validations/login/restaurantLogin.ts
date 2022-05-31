import { validate, Joi } from "express-validation";

const restaurantLoginValidation = validate({
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export { restaurantLoginValidation };
