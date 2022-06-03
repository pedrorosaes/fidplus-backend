import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { ExpressJwtRequest } from "express-jwt";
import jwt from "jsonwebtoken";

import { secretKey } from "../configs/secret";
import { Clients, Restaurants } from "../models";

const authController = {
  restaurantLogin: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(password);
    const restaurant = await Restaurants.findOne({
      where: {
        email,
      },
    });
    if (!restaurant) {
      return res.status(400).json("Email ou senha não encontrado");
    }
    if (!bcryptjs.compareSync(password, restaurant.password)) {
      return res.status(401).json("Senha nao encontrada");
    }
    const token = jwt.sign(
      {
        id: restaurant.id,
        name: restaurant.name,
        email: restaurant.email,
        avatar: restaurant.img_url,
        type: restaurant.type,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    return res.json({ token, restaurant });
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
        name: client.name,
        email: client.email,
        avatar: client.img_url,
        type: client.type,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    return res.json({ token, client });
  },
  tokenLogin: async (req: ExpressJwtRequest<JwtPayload>, res: Response) => {
    const { id, name, email, avatar, type } = req.auth;
    let client;
    if (type === 0) {
      client = await Clients.findOne({
        where: {
          email,
        },
      });
    } else {
      client = await Restaurants.findOne({
        where: {
          email,
        },
      });
    }

    return res.status(200).json({ id, name, email, avatar, type });
  },
};

export { authController };
