import sequelize from "../DB/db.js ";
import { Op, Model, DataTypes } from "sequelize";
// import useBcrypt from "sequelize-bcrypt" //ani
import Mess from "./Mess.js"


const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    Uid: {
      type: DataTypes.INTEGER, //or type: Sequelize.UUID  or DataTypes.UUID
      primaryKey: true,
      //   allowNull: false, // defaults to true
    },
    Uname: {
      type: DataTypes.STRING,
      //   allowNull: false,
      // defaultValue: "John Doe",
    },
    Upasswd: {
      type: DataTypes.STRING,
      //   allowNull: false,
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
    // Other model options go here
    //tableName: 'Employees'
    timestamps: false,
    freezeTableName: true,
  }
);

User.belongsTo(Mess, { foreignKey: 'Mid' });

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;
