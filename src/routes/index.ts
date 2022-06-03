import express from "express";

import { authController } from "../controllers/authController";
import { clientController } from "../controllers/clientController";
import { fidelityController } from "../controllers/fidelityCotroller";
import { restaurantController } from "../controllers/restaurantController";
import { authJWT } from "../middlewares/auth";
import { clientCreateValidation } from "../validations/client/create";
import { deleteById } from "../validations/client/deleteById";
import { clientListOneValidation } from "../validations/client/listById";
import { updateClientById } from "../validations/client/updateClient";
import { fidelityCreateValidation } from "../validations/fidelity/create";
import { clientLoginValidation } from "../validations/login/clientLogin";
import { restaurantLoginValidation } from "../validations/login/restaurantLogin";
import { restaurantCreateValidation } from "../validations/restaurant/create";

const routes = express.Router();

// Routes for Restaurant

routes.post(
  "/restaurant",
  restaurantCreateValidation,
  restaurantController.restaurantSignUp
);
routes.get("/restaurant", restaurantController.listAll);
routes.get("/restaurant/:id", authJWT, restaurantController.listById);
routes.delete(
  "/restaurant/:id",
  authJWT,
  restaurantController.deleteRestaurant
);
routes.put("/restaurant/:id", authJWT, restaurantController.restaurantUpdate);

// Routes for Clients

routes.post("/client", clientCreateValidation, clientController.clientSignIn);
routes.get(
  "/client/:id",
  authJWT,
  clientListOneValidation,
  clientController.listById
);
routes.delete(
  "/client/:id",
  authJWT,
  deleteById,
  clientController.deleteClient
);
routes.put(
  "/client/:id",
  authJWT,
  updateClientById,
  clientController.clientUpdate
);

// Route Login

routes.post("/login/client", clientLoginValidation, authController.clientLogin);
routes.post(
  "/login/restaurant",
  restaurantLoginValidation,
  authController.restaurantLogin
);
routes.post("/login/me", authJWT, authController.tokenLogin);

// Testes

routes.post(
  "/fidelity",
  fidelityCreateValidation,
  fidelityController.createFidelity
);
routes.get(
  "/fidelity/:id",
  authJWT,
  fidelityController.listAllFidelitysByRestaurant
);
routes.delete("/fidelity/:id", authJWT, fidelityController.deleteFidelity);

export { routes };
