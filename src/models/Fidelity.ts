import { DataTypes } from "sequelize";

import { sequelize } from "../database";

const Fidelity = sequelize.define(
  "Fidelity",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    steps: {
      type: DataTypes.INTEGER,
      defaultValue: 6,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    restaurant_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Fidelitys",
  }
);

export { Fidelity };
