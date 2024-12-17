import * as dotenv from 'dotenv'

dotenv.config();

import sequelize from "./config/database";
import recipeRoutes from "./routes/recipeRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";
import commentRoutes from "./routes/commentRoutes";
import ingredientRoutes from "./routes/ingredientRoutes";
import accountRoutes from "./routes/accountRoutes";
import defineAssociations from "./config/associations";
import recipeIngredientsRoutes from "./routes/recipeIngredientsRoutes";


const express = require('express');
const app = express();



// Connexion à la base de données

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

app.use('/api', recipeRoutes)
app.use('/api', commentRoutes)
app.use('/api', ingredientRoutes)
app.use('/api', accountRoutes)
app.use('/api', favoriteRoutes)
app.use('/api', recipeIngredientsRoutes)



const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

console.log('DB_URL via app.ts:', process.env.DB_URL);

/*
const initModels = () => {
    Recipe.initModel(sequelize);
    Ingredient.initModel(sequelize);
    Account.initModel(sequelize);
    RecipeIngredient.initModel(sequelize);
    Favorite.initModel(sequelize);
    Comment.initModel(sequelize);

    // Associations
    Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
    Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });
    Account.hasMany(Favorite);
    Favorite.belongsTo(Account);
    Recipe.hasMany(Favorite);
    Favorite.belongsTo(Recipe);
    Recipe.hasMany(Comment);
    Comment.belongsTo(Recipe);
    Account.hasMany(Comment);
    Comment.belongsTo(Account);
}; */


defineAssociations()

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });



// Synchroniser les modèles avec la base de données
sequelize.sync({ force: false }) // Force true pour effacer la DB et la recréer
    .then(() => {
        console.log('Database & tables created!');
    });
