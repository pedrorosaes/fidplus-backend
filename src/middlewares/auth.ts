import { expressjwt } from "express-jwt";

import { secretKey } from "../configs/secret";

export const authJWT = expressjwt({
  secret: secretKey,
  algorithms: ["HS256"],
});
