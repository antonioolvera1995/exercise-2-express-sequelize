import { Model, Sequelize, DataTypes } from "sequelize";
import { database } from "../database";


export class User extends Model {

    public id!: number;
    public name!: string;
    public lastname!: string;
    public createdAt!: Date;
    public updateAt!: Date;





}


User.init({

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    name: {
        type: DataTypes.STRING
    },

    lastname: {
        type: DataTypes.STRING
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



},
    {
        tableName: 'users',
        sequelize: database
    });