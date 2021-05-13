import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Payments = sequelize.define('payments', {
    payid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'billing',
        key: 'billid'
      }
    },
    paid: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payid" },
        ]
      },
      {
        name: "billid",
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "premiseid",
        using: "BTREE",
        fields: [
          { name: "premiseid" },
        ]
      },
    ]
  });
export default Payments
