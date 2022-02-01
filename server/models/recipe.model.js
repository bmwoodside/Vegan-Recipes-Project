const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    recipeName: { type: String,
        required: [true, "you need a recipe name"],
        minLength: [3, "name needs at least 3 characters!"]},
    recipeDescription: { type: String,
        required: [true, "you need a recipe description"],
        minLength: [3, "description needs at least 3 characters!"]},
    recipeIngredients: { type: [String] },
    recipeInstructions: { type: String,
        required: [true, "you need recipe instructions"],
        minLength:[3, "recipe instructions needs at least 3 characters!"]}, 
    carbCount: { type: Number,
        required: [true, "you need a carb count!"],
        min: [1, "you need to enter at least 1g carb"]},
    proteinCount: { type: Number,
        required: [true, "you need a protein count!"],
        min: [1, "you need to enter at least 1g protein"]},
    fatCount: { type: Number,
        required: [true, "you need a fat count!"],
        min: [1, "you need to enter at least 1g fat"] },
    recipeLikes: { type: Number },
    recipeURL: { type: String },
}, { timestamps: true });

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema);