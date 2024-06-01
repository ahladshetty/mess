import sequelize from "../DB/db.js ";
import DataTypes from "sequelize";

const Staff = sequelize.define('Staff', {
  Sid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Sname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Spasswd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role:{
    type: DataTypes.STRING,
    defaultValue:"staff"
  }
},
{
    timestamps: false,
    freezeTableName: true
}
);

Staff.sync();

export default Staff;
