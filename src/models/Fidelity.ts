import { DataTypes } from "sequelize";

import { sequelize } from "../database";
import { Restaurants } from "./index";

const Fidelity = sequelize.define(
  "Fidelity",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_points: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    Restaurants_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Restaurants,
        key: "id",
      },
    },
  },
  {
    tableName: "Fidelitys",
  }
);

export { Fidelity };
