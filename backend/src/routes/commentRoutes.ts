import express from 'express';
import {
    addComment,
    getCommentsByRecipe,
    getCommentById,
    deleteComment,
} from '../controllers/commentController';

const router = express.Router();

router.post('/comments', addComment); // Ajouter un commentaire
router.get('/recipes/:recipeId/comments', getCommentsByRecipe); // Obtenir les commentaires d'une recette
router.get('/comments/:id', getCommentById); // Obtenir un commentaire par ID
router.delete('/comments/:id', deleteComment); // Supprimer un commentaire par ID

export default router;
