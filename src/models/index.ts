import { Clients } from "./Clients";
import { Fidelity } from "./Fidelity";
import { Restaurants } from "./Restaurants";

Fidelity.belongsTo(Restaurants, {
  foreignKey: "restaurant_id",
});

Restaurants.hasMany(Fidelity, {
  foreignKey: "restaurant_id",
});

export { Fidelity, Restaurants, Clients };
