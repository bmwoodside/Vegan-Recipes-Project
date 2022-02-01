const RecipeController = require('../controllers/recipe.controller');

module.exports = function(app) {
    app.post('/api/recipes/create', RecipeController.createRecipe);
    app.get('/api/recipes/findall', RecipeController.getAllRecipes);
    app.get('/api/recipes/:_id', RecipeController.getRecipe);
    app.put('/api/recipes/:_id/update', RecipeController.updateRecipe);
    app.delete('/api/recipes/:_id/delete', RecipeController.deleteRecipe);
}