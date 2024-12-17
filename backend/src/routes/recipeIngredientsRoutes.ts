import express from 'express';
import {
    addIngredientToRecipe,
    createRecipeIngredient,
    getAllRecipeIngredients
} from '../controllers/recipeIngredientController';

const router = express.Router();

// Route pour créer un nouvel ingredient pour une recette
router.post('/recipes/:id/ingredients', createRecipeIngredient);
router.post('/recipes/:recipeId/ingredients/:ingredientId', addIngredientToRecipe);

// Route pour obtenir tous les ingrédients associés aux recettes
router.get('/recipes/:id/ingredients', getAllRecipeIngredients);

export default router;
