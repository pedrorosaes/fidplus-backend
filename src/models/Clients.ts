import { DataTypes } from "sequelize";

import { sequelize } from "../database";

const Clients = sequelize.define(
  "img",
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
      defaultValue: 0,
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
    tableName: "Users",
  }
);

export { Clients };
