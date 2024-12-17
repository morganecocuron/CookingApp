import express from 'express';
import { createIngredient, getAllIngredients, updateIngredient, deleteIngredient } from '../controllers/ingredientController';

const router = express.Router();

router.post('/ingredients', createIngredient);
router.get('/ingredients', getAllIngredients);
router.put('/ingredients/:id', updateIngredient);
router.delete('/ingredients/:id', deleteIngredient);

export default router;
