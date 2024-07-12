import sequelize from "../DB/db.js ";
import DataTypes from "sequelize";
import Mess from "./Mess.js"


const User = sequelize.define(
  "User",
  {
    Uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Uname: {
      type: DataTypes.STRING,
    },
    Upasswd: {
      type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.STRING,
    defaultValue:"student"
    },

    Mid: {
      type: DataTypes.INTEGER,

      references: {
        model: "Mess",
        key: "Mid",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.belongsTo(Mess, { foreignKey: 'Mid' });

export default User;
