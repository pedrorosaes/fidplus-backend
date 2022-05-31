import express from "express";

import { authController } from "../controllers/authController";
import { clientController } from "../controllers/clientController";
import { fidelityController } from "../controllers/fidelityCotroller";
import { restaurantController } from "../controllers/restaurantController";
import { clientCreateValidation } from "../validations/client/create";
import { deleteById } from "../validations/client/deleteById";
import { clientListOneValidation } from "../validations/client/listById";
import { updateClientById } from "../validations/client/updateClient";
import { clientLoginValidation } from "../validations/login/clientLogin";
import { restaurantLoginValidation } from "../validations/login/restaurantLogin";
import { restaurantCreateValidation } from "../validations/restaurant/create";

const routes = express.Router();

// Routes for Restaurant

routes.post(
  "/restaurant",
  restaurantCreateValidation,
  restaurantController.restaurantSignIn
);
routes.get("/restaurant", restaurantController.listAll);
routes.get("/restaurant/:id", restaurantController.listById);
routes.delete("/restaurant/:id", restaurantController.deleteRestaurant);
routes.put("/restaurant/:id", restaurantController.restaurantUpdate);

// Routes for Clients

routes.post("/client", clientCreateValidation, clientController.clientSignIn);
routes.get("/client/:id", clientListOneValidation, clientController.listById);
routes.delete("/client/:id", deleteById, clientController.deleteClient);
routes.put("/client/:id", updateClientById, clientController.clientUpdate);

// Route Login

routes.post("/login/client", clientLoginValidation, authController.clientLogin);
routes.post(
  "/login/restaurant",
  restaurantLoginValidation,
  authController.restaurantLogin
);

// Testes

routes.post("/fidelitys/:id", fidelityController.createFidelity);
routes.get("/fidelitys/:id", fidelityController.listAllFidelitysByRestaurant);

export { routes };
