import express from "express";

import { config } from "./configs/config";
import { hasConection } from "./database";
import { handleError } from "./middlewares/handleError";
import { routes } from "./routes";

const app = express();

hasConection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(config.server.port, () => console.log("Server running"));
