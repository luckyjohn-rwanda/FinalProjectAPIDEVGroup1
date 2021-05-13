import Sequelize from "sequelize";
import {sequelize} from "../db/dbConnect.js";

const Bills = sequelize.define('billing', {
    billid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    premiseid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'premises',
        key: 'premiseid'
      }
    },
    billerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'biller',
        key: 'billerid'
      }
    },
    reading: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    }

  }, {
    sequelize,
    tableName: 'billing',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "billing_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "premiseid" },
        ]
      },
      {
        name: "billing_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "billerid" },
        ]
      },
    ]
  });
export default Bills
