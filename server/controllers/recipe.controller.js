const { response, request } = require('express');
const { Recipe } = require('../models/recipe.model');

// create new recipe
module.exports.createRecipe = (req, res) => {
    const { recipeName, recipeDescription, recipeIngredients, recipeInstructions, carbCount, proteinCount, fatCount, recipeURL } = req.body;
    const recipeLikes = 0;
    Recipe.create({
        recipeName,
        recipeDescription,
        recipeIngredients,
        recipeInstructions,
        carbCount,
        proteinCount,
        fatCount,
        recipeLikes,
        recipeURL,
    })
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
}

// get all recipes
module.exports.getAllRecipes = (req, res) => {
    Recipe.find({})
        .then(recipes => res.json(recipes))
        .catch(err => res.json(err));
}

// get One recipe
module.exports.getRecipe = (req, res) => {
    Recipe.findOne({_id:req.params._id})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err))
}

// update one recipe
module.exports.updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updatedRecipe => res.json(updatedRecipe))
        .catch(err => res.json(err))
}

module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch (err => res.json(err));
}

module.exports.upvoteRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id:req.params._id}, {$inc: {recipeLikes:1}})
    .then(likedRecipe => res.json({likedRecipe}))
    .catch(err =>res.status(400).json({message:"that didnt quite work", err}));
}