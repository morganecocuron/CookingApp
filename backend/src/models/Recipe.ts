// src/models/Recipe.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import RecipeIngredient from './RecipeIngredient';
import Comment from './Comment';
import Favorite from './Favorite';

class Recipe extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public timeToPrepareInMinute!: number;
    public averageRating!: number;
}

Recipe.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        timeToPrepareInMinute: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        averageRating: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Recipe',
    }
);



export default Recipe;
