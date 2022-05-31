import { Request, Response } from "express";

import { Fidelitys } from "../models";

const fidelityController = {
  createFidelity: async (req: Request, res: Response) => {
    const {
      price,
      image_url,
      description,
      title,
      reward_points,
      Restaurants_id,
    } = req.body;

    try {
      await Fidelitys.create({
        price,
        image_url,
        description,
        title,
        reward_points,
        Restaurants_id,
      });
    } catch (err) {
      console.error(err);
    }
    res.send();
  },
  listAllFidelitysByRestaurant: async (req: Request, res: Response) => {
    const { id } = req.params;
    const listaDeProdutos = await Fidelitys.findAll({
      where: {
        Restaurants_id: id,
      },
    });
    res.json(listaDeProdutos);
  },
};

export { fidelityController };
