import sequelize from "../DB/db.js ";
import DataTypes from "sequelize";

import User from "./User.js"
import Food from "./Food.js"
import Mess from "./Mess.js"

const Vote = sequelize.define('Vote', {
    Vid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Uid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'Uid',
      },
      allowNull: false,
    },
    Mid: {
      type: DataTypes.INTEGER,
  
      references: {
        model: "Mess",
        key: "Mid",
      },
    },
    Day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Timeslot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Food',
        key: 'Fid',
      },
      allowNull: false,
    }
  
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  
Vote.belongsTo(User, { foreignKey: 'Uid' });
Vote.belongsTo(Mess, { foreignKey: 'Mid' });
Vote.belongsTo(Food, { foreignKey: 'Fid' });

await Vote.sync();
  
export default Vote;