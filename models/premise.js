import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Premises = sequelize.define('premises', {
    premiseid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meterno: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    memberid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'members',
        key: 'memberid'
      }
    },
    routeid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'routes',
        key: 'routeid'
      }
    }
  }, {
    sequelize,
    tableName: 'premises',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "premiseid" },
        ]
      },
      {
        name: "memberid",
        using: "BTREE",
        fields: [
          { name: "memberid" },
        ]
      },
      {
        name: "routeid",
        using: "BTREE",
        fields: [
          { name: "routeid" },
        ]
      },
    ]
  });
export default Premises
