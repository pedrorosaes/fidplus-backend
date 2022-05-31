import { Request, Response } from "express";

import { Restaurants } from "../models";

const restaurantController = {
  restaurantSignIn: async (req: Request, res: Response): Promise<void> => {
    const { name, email, cnpj, password } = req.body;

    try {
      await Restaurants.create({
        name,
        email,
        cnpj,
        password,
      });
    } catch (err) {
      console.log(err);
    }

    res.send();
  },
  listAll: async (req: Request, res: Response): Promise<void> => {
    const allRestaurants = await Restaurants.findAll();

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
    const { name, email, cnpj, password } = req.body;
    try {
      await Restaurants.update(
        {
          name,
          email,
          cnpj,
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
