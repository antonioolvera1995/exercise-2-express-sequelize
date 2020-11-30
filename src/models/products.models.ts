import { DataTypes, Sequelize, Model } from "sequelize";
import { database } from "../database";
export class Product extends Model {

  public id!: number;
  public name!: string;
  public aprice!: string;
  public createdAt!: Date;
  public updateAt!: Date


};
Product.init({


  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    type: DataTypes.STRING
  },

  aprice: {
    type: DataTypes.INTEGER
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }



}, {
  sequelize: database,
  modelName: 'products',
});
