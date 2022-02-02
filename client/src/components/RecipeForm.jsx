import axios from 'axios';
import { Link, useHistory } from "react-router-dom"
import { useState } from "react";
import e from 'express';

const RecipeForm = (props) => {
    const [form, setForm] = useState({
        recipeName: "",
        recipeDescription: "",
        recipeInstructions: "",
        carbCount: 1,
        proteinCount: 1,
        fatCount: 1,
        recipeLikes: 0,
        recipeURL: "",
        recipeIngredients: [],
    })
    const [tempIngredient, setTempIngredient] = useState("");
    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [instructionsError, setInstructionsError] = useState("");
    
    const history = useHistory();

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // only make axios call if fields meet validations
        form.recipeName.length >= 3 && form.recipeDescription.length >= 3 && form.recipeInstructions.length >= 3
            ? axios.post('http://localhost:8000/api/recipes/create', form)
                .then(res => {
                    // TODO: send route to show-all page instead of main.
                    history.push("/")
                })
                .catch(err => console.log(err))
            : console.log("validations not met...")
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="recipeForm">
                <h1>Add a new recipe:</h1>

                <div className="form-col-input-left">
                    <div className="create-name">
                        <label htmlFor='recipeName'>
                            <p>Name: </p>
                            {
                                nameError
                                ? <p style={{ color: "red" }}>{ nameError }</p>
                                : null
                            }
                            <input type="text" name='recipeName' onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setNameError("Recipe name must be at least 3 characters.") : setNameError("");}} />
                        </label>
                    </div>
                    
                    <div className="create-description">
                        <label htmlFor="recipeDescription">
                            <p>Description:</p>
                            {
                                descriptionError
                                ? <p style={{ color: "red" }}>{ descriptionError }</p>
                                : null
                            }
                            <textarea name='recipeDescription' onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setDescriptionError("Description must be at least 3 characters.") : setDescriptionError("");}} />
                        </label>
                    </div>

                    <div className="create-instructions">
                        <label htmlFor="recipeInstructions">
                            <p>Instructions:</p>
                            {
                                instructionsError
                                ? <p style={{ color: "red" }}>{ instructionsError }</p>
                                : null
                            }
                            <textarea name='recipeInstructions' onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setInstructionsError("Instructions must be at least 3 characters.") : setInstructionsError("");}} />
                        </label>
                    </div>

                    <div className="create-macro-counts">
                        <div className="carbCount">
                            <p>Carbs (g):</p>
                            <input type="number" name="carbCount" id="carbCount" onChange={(e) => {onChangeHandler(e);}} value={form.carbCount} min='1' />
                        </div>
                        <div className="proteinCount">
                            <p>Protein (g):</p>
                            <input type="number" name="proteinCount" id="proteinCount" onChange={(e) => {onChangeHandler(e);}} value={form.proteinCount} min='1' />
                        </div>
                        <div className="fatCount">
                            <p>Fat (g):</p>
                            <input type="number" name="fatCount" id="fatCount" onChange={(e) => {onChangeHandler(e);}} value={form.fatCount} min='1'/>
                        </div>
                    </div>

                    <div className="create-recipeURL">
                        <label htmlFor='recipeURL'>
                            <p>Link to a picture! (optional):</p>
                            <input type="text" name="recipeURL" id="recipeURL" onChange={(e) => onChangeHandler(e)} />
                        </label>
                    </div>
                    

                    <button className='btn btn-primary'>Submit Recipe!</button>
                </div>

                <div className="form-col-input-right">
                    <h3>Ingredients:</h3>




                    <div className="create-recipe-ingredients">
                        <input type="text" name="recipeIngredients" id="recipeIngredients" onChange={(e) => setTempIngredient(e.target.value)} />
                        <button >Add Ingredient</button>
                    </div>
                    

                </div>

            </form>

        </div>
    )
}

export default RecipeForm;