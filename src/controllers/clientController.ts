import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

import { Clients } from "../models";

const clientController = {
  clientSignIn: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const passwordEncrypt = bcryptjs.hashSync(password, 10);

    try {
      await Clients.create({
        name,
        email,
        password: passwordEncrypt,
      });
      res.status(201).send();
    } catch (err) {
      console.error(err);
    }
  },
  deleteClient: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Clients.destroy({
        where: {
          id,
        },
      });
      res.send();
    } catch (err) {
      console.log(err);
    }
  },
  listById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const client = await Clients.findByPk(id);
      res.json(client);
    } catch (err) {
      console.log(err);
    }
  },
  clientUpdate: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password, img_url } = req.body;

    try {
      await Clients.update(
        {
          name,
          email,
          password,
          img_url,
        },
        {
          where: {
            id,
          },
        }
      );
      res.send();
    } catch (err) {
      console.log(err);
    }
  },
};

export { clientController };
