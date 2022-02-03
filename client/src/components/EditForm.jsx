import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom"


const EditForm = (props) => {
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
    const [ingredientsError, setIngredientsError] = useState("");

    const history = useHistory();

    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${_id}`)
            .then(res => {
                console.log(res);
                setForm(res.data);
            })
            .catch(err => console.log(err));
    }, [_id])

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // only make axios call if fields meet validations
        form.recipeName.length >= 3 && form.recipeDescription.length >= 3 && form.recipeInstructions.length >= 3 && form.recipeIngredients.length >= 1
            ? axios.put(`http://localhost:8000/api/recipes/${_id}/update`, form)
                .then(res => {
                    history.push("/recipes/viewall")
                })
                .catch(err => console.log(err))
            : console.log("validations not met...")
    }

    const handleAddIngredient = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [form.recipeIngredients]: form.recipeIngredients.push(tempIngredient)
        })
        setTempIngredient("");
        setIngredientsError("")
    }

    const ingredientDeleteHandler = (e, i) => {
        e.preventDefault();
        // remove ingredient from the list of ingredients stored.
        // pretty sure that the tempArr is not 'required', but want to make sure it does what we want.
        let tempArr = form.recipeIngredients.splice(i, 1);
        setForm({
            ...form,
            [form.recipeIngredients]: tempArr
        })
    }

    return (
        <div>

            <form onSubmit={onSubmitHandler} className="recipeForm">
                <div className="flex-create">

                    <div className="form-col-input-left">
                        <div className="create-name">
                            <label htmlFor='recipeName' >
                                <p className='create-labels'>Name: </p>
                                {
                                    nameError
                                        ? <p style={{ color: "red" }}>{nameError}</p>
                                        : null
                                }
                                <input type="text" name='recipeName' className='input-label' value={form.recipeName} onChange={(e) => { onChangeHandler(e); e.target.value.length < 3 ? setNameError("Recipe name must be at least 3 characters.") : setNameError(""); }} placeholder='(e.g.: Vegan Burritos!..)' />
                            </label>
                        </div>


                <div className='flex-create'>
                    <div className="form-col-input-left">
                        <div className="create-name">
                            <label htmlFor='recipeName' >
                                <p className='create-labels'>Name: </p>
                                {
                                    nameError
                                        ? <p style={{ color: "red" }}>{nameError}</p>
                                        : null
                                }
                                <input type="text" name='recipeName' className='input-label' value={form.recipeName} onChange={(e) => { onChangeHandler(e); e.target.value.length < 3 ? setNameError("Recipe name must be at least 3 characters.") : setNameError(""); }} placeholder='(e.g.: Vegan Burritos!..)' />
                            </label>
                        </div>

                        <div className="create-description">
                            <label htmlFor="recipeDescription">
                                <p className='create-labels'>Description:</p>
                                {
                                    descriptionError
                                        ? <p style={{ color: "red" }}>{descriptionError}</p>
                                        : null
                                }
                                <textarea name='recipeDescription' className='input-label' value={form.recipeDescription} onChange={(e) => { onChangeHandler(e); e.target.value.length < 3 ? setDescriptionError("Description must be at least 3 characters.") : setDescriptionError(""); }} placeholder='Tell us an appetizing description!' />
                            </label>
                        </div>

                        <div className="create-instructions">
                            <label htmlFor="recipeInstructions">
                                <p className='create-labels'>Instructions:</p>
                                {
                                    instructionsError
                                        ? <p style={{ color: "red" }}>{instructionsError}</p>
                                        : null
                                }
                                <textarea name='recipeInstructions' className='input-label' value={form.recipeInstructions} onChange={(e) => { onChangeHandler(e); e.target.value.length < 3 ? setInstructionsError("Instructions must be at least 3 characters.") : setInstructionsError(""); }} placeholder='Write your instructions here!' />
                            </label>
                        </div>


                        <div className="create-macro-counts">
                            <div className="carbCount">
                                <p className='create-labels'>Carbs (g):</p>
                                <input type="number" name="carbCount" id="carbCount" value={form.carbCount} onChange={(e) => { onChangeHandler(e); }} min='1' />
                            </div>
                            <div className="proteinCount">
                                <p className='create-labels'> Protein (g):</p>
                                <input type="number" name="proteinCount" id="proteinCount" value={form.proteinCount} onChange={(e) => { onChangeHandler(e); }} min='1' />
                            </div>
                            <div className="fatCount">
                                <p className='create-labels'>Fat (g):</p>
                                <input type="number" name="fatCount" id="fatCount" value={form.fatCount} onChange={(e) => { onChangeHandler(e); }} min='1' />
                            </div>
                        </div>

                        <div className="create-recipeURL">
                            <label htmlFor='recipeURL'>
                                <p className='create-labels'>Link to a picture! (optional):</p>
                                <input type="text" name="recipeURL" className='input-label' id="recipeURL" value={form.recipeURL} onChange={(e) => onChangeHandler(e)} placeholder='e.g.: www.google.com' />
                            </label>
                        </div>


                        <button className='createBtn' onClick={() => form.recipeIngredients.length < 1 ? setIngredientsError("Ingredients must have at least 1 item.") : setIngredientsError("")}>Update Recipe!</button>
                    </div>

                    <div className="form-col-input-right">
                        <h3 id='create-recipe-ingredients-header'>Ingredients:</h3>

                        <ul>
                            {form.recipeIngredients.map((ingredient, i) =>
                                <li key={i}>
                                    {ingredient}
                                    <button className='btn btn-danger' onClick={(e) => ingredientDeleteHandler(e, i)}>Remove</button>
                                </li>
                            )}
                        </ul>

                        <div className="create-recipe-ingredients">
                            {
                                ingredientsError
                                    ? <p style={{ color: "red" }}>{ingredientsError}</p>
                                    : null
                            }

                            <input type="text" name="recipeIngredients" className='input-label' id="recipeIngredients" onChange={(e) => setTempIngredient(e.target.value)} value={tempIngredient} />
                            <button className='createBtn' onClick={handleAddIngredient}>Edit Ingredient</button>

                        </div>


                    </div>
                </div>



            </form>

        </div>
    )
}

export default EditForm;
