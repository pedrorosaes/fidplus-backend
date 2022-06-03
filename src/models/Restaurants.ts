import { DataTypes } from "sequelize";

import { sequelize } from "../database";

const Restaurants = sequelize.define(
  "Restaurants",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    img_url: {
      type: DataTypes.STRING,
      defaultValue:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "Restaurants",
  }
);

export { Restaurants };
