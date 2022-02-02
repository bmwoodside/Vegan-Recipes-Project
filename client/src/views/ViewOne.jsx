import React, { useEffect, useState } from 'react';
import { useParams, Link, } from 'react-router-dom';
import axios from 'axios';


const ViewOne = (props) => {
    const [view, setView] = useState({});
    const {_id} = useParams();
    

    useEffect (() => {
        axios.get(`http://localhost:8000/api/recipes/${_id}`)
        .then(res => {
            console.log(res);
            setView(res.data.results)
        })
        .catch(err => console.log(err));
    }, [_id])


        return(

            <div className='w-50 mx-auto'>
                <h1>{view.recipeName}</h1>
                <img src={view.recipeURL} alt={view.recipeURL} />
                <p>Ingredients {view.recipeIngredients}</p>
                <p>Instructions: {view.recipeInstructions}</p>
                <p>carbs: {view.carbCount}g  protein: {view.proteinCount}g  fat: {view.fatCount}g</p>
            </div>


        )



}


export default View;

