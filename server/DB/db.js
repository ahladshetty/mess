import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './DB/mess.sqlite',
});
  
export default sequelize
