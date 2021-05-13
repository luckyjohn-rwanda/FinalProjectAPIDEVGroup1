import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Billers = sequelize.define('biller', {
  billerid: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'biller',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "billerid" },
      ]
    }
  ]
});
export default Billers
