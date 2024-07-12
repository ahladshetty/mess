import sequelize from "../DB/db.js ";
import DataTypes from "sequelize";
import Mess from "./Mess.js"


const Food = sequelize.define(
  "Food",
  {
    Fid: {
      type: DataTypes.INTEGER, //or type: Sequelize.UUID or DataTypes.UUID
      primaryKey: true,
      //   allowNull: false, // defaults to true
    },
    Fname: {
      type: DataTypes.STRING,
      //   allowNull: false,
      // defaultValue: "John Doe",
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
    //tableName: 'Employees'
    timestamps: false,
    freezeTableName: true,
  }
);

Food.belongsTo(Mess, { foreignKey: 'Mid' });

await Food.sync();

export default Food;
