import express from "express";

import { hasConection } from "./database";
import { handleError } from "./middlewares/handleError";
import { routes } from "./routes";

const app = express();

hasConection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(3000, () => console.log("Server running"));