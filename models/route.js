import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Routes = sequelize.define('routes', {
    routeid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'routes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "routeid" },
        ]
      },
    ]
  });
export default Routes
