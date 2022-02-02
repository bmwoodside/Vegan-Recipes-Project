import axios from 'axios';
import { Link, useHistory } from "react-router-dom"
import { useState } from "react";

const RecipeForm = (props) => {

    const history = useHistory();

    const [form, setForm] = useState({
        recipeName: "",
        recipeDescription: "",
        recipeInstructions: "",
        carbCount: 0,
        proteinCount: 0,
        fatCount: 0,
        recipeLikes: 0,
        recipeURL: "",
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="recipeForm">
                <h1>Add a new recipe:</h1>

                <div className="form-col-input-left">
                    <div className="create-name">
                        <label htmlFor='recipeName'>
                            <p>Name: </p> <input type="text" name='recipeName' onChange={(e) => {onChangeHandler(e);}} />
                        </label>
                    </div>
                    
                    <div className="create-description">
                        <label htmlFor="recipeDescription">
                            <p>Description:</p>
                            <textarea name='recipeDescription' onChange={(e) => {onChangeHandler(e);}} />
                        </label>
                    </div>

                    <div className="create-instructions">
                        <label htmlFor="recipeInstructions">
                            <p>Instructions:</p>
                            <textarea name='recipeInstructions' onChange={(e) => {onChangeHandler(e);}} />
                        </label>
                    </div>

                    <div className="create-macro-counts">
                        <div className="carbCount">
                            <p>Carbs (g):</p>
                            <input type="number" name="carbCount" id="carbCount" onChange={(e) => {onChangeHandler(e);}} placeholder='0' min='0' />
                        </div>
                        <div className="proteinCount">
                            <p>Protein (g):</p>
                            <input type="number" name="proteinCount" id="proteinCount" onChange={(e) => {onChangeHandler(e);}} placeholder='0' min='0' />
                        </div>
                        <div className="fatCount">
                            <p>Fat (g):</p>
                            <input type="number" name="fatCount" id="fatCount" onChange={(e) => {onChangeHandler(e);}} placeholder='0' min='0'/>
                        </div>
                    </div>

                    <button className='btn btn-primary'>Submit Recipe!</button>
                </div>

                <div className="form-col-input-right">
                    <h3>Ingredients:</h3>





                </div>

            </form>

        </div>
    )
}

export default RecipeForm;