import { Request, Response } from "express";

import { Fidelity } from "../models";

const fidelityController = {
  createFidelity: async (req: Request, res: Response) => {
    const { price, description, title, restaurant_id } = req.body;

    try {
      await Fidelity.create({
        price,
        description,
        title,
        restaurant_id,
      });
    } catch (err) {
      console.error(err);
    }
    res.send();
  },
  listAllFidelitysByRestaurant: async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    const listaDeProdutos = await Fidelity.findAll({
      where: {
        restaurant_id: id,
      },
    });
    res.status(201).json(listaDeProdutos);
  },
  deleteFidelity: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Fidelity.destroy({
        where: {
          id,
        },
      });
      res.status(201).json({ message: "Fidelity deleted" });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

export { fidelityController };
