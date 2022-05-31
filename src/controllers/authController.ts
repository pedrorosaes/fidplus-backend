import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { secretKey } from "../configs/secret";
import { Clients, Restaurants } from "../models";

const authController = {
  restaurantLogin: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const restaurant = await Restaurants.findOne({
      where: {
        email,
      },
    });
    if (!restaurant) {
      return res.status(400).json("Email ou senha não encontrado");
    }
    if (!bcryptjs.compareSync(password, restaurant.password)) {
      return res.status(401).json("Email ou senha não encontrado");
    }
  },
  clientLogin: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const client = await Clients.findOne({
      where: {
        email,
      },
    });
    if (!client) {
      return res.status(400).json("Email ou senha não encontrado");
    }
    if (!bcryptjs.compareSync(password, client.password)) {
      return res.status(401).json("Email ou senha não encontrado");
    }
    const token = jwt.sign(
      {
        id: client.id,
        email: client.email,
        password: client.password,
      },
      secretKey
    );
    return res.json(token);
  },
};

export { authController };
