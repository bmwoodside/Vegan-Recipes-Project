const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    recipeName: { type: String },
    recipeDescription: { type: String },
    recipeIngredients: { type: [String] },
    recipeInstructions: { type: String },
    carbCount: { type: Number },
    proteinCount: { type: Number },
    fatCount: { type: Number },
    recipeLikes: { type: Number },
    recipeURL: { type: String },
}, { timestamps: true });

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema);