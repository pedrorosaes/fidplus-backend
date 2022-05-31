import { validate, Joi } from "express-validation";

const restaurantDeleteById = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

export { restaurantDeleteById };
