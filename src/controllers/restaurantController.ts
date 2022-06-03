import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

import { Fidelity, Restaurants } from "../models";

const restaurantController = {
  restaurantSignUp: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const alreadyExists = await Restaurants.findOne({
      where: {
        email,
      },
    });
    if (alreadyExists) {
      return res.status(409).json({ message: "Email already exist" });
    }
    const passwordEncrypt = bcryptjs.hashSync(password, 10);

    try {
      await Restaurants.create({
        name,
        email,
        password: passwordEncrypt,
      });
    } catch (err) {
      console.log(err);
    }

    return res.status(201).json({ message: "User created" });
  },
  listAll: async (req: Request, res: Response): Promise<void> => {
    const allRestaurants = await Restaurants.findAll({
      include: [
        {
          model: Fidelity,
        },
      ],
    });

    res.json(allRestaurants);
  },
  restaurantDelete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await Restaurants.destroy({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
    res.send();
  },
  restaurantUpdate: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      await Restaurants.update(
        {
          name,
          email,
          password,
        },
        {
          where: {
            id,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    res.send();
  },
  listById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const restaurantById = await Restaurants.findByPk(id);
      res.json(restaurantById);
    } catch (err) {
      console.log(err);
    }
  },
  deleteRestaurant: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Restaurants.destroy({
        where: {
          id,
        },
      });
      res.send();
    } catch (err) {
      console.log(err);
    }
  },
};

export { restaurantController };
