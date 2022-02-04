import React, { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from 'react-router-dom';

import axios from 'axios';


const ViewOne = (props) => {
    const [disableLikeButton, setDisableLikeButton] = useState(false);
    const [view, setView] = useState({
        recipeIngredients: []
    });
    const {_id} = useParams();
    const history = useHistory();
    

    useEffect (() => {
        axios.get(`http://localhost:8000/api/recipes/${_id}`)
        .then(res => {
            console.log(res);
            setView(res.data)
        })
        .catch(err => console.log(err));
    }, [_id])

    const onLikeHandler = (_id) => {
        console.log(_id);

        axios.patch(`http://localhost:8000/api/recipes/${_id}/upvote`)
        .then(res=>{
            console.log(res)

            const copyRecipes = {...view};
            copyRecipes.recipeLikes++;
    
            setView(copyRecipes);

        })
        .catch(err=>console.log(err))

        setDisableLikeButton(true);
    }

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/recipes/${_id}/delete`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err));
        history.push("/recipes/viewall")
    }


        return(

            <div className='w-50 mx-auto oneRecipe'>
                <h1>{view.recipeName}</h1>
                {
                    view.recipeURL == ""
                        ? <img src="../logo192.png" alt="" />
                        : <img src={view.recipeURL} alt={view.recipeURL}></img>
                }
                <h1><button className='btn btn-warning' onClick={()=>onLikeHandler(view._id)} disabled={disableLikeButton}>👍{view.recipeLikes}</button></h1>

                <h4>Ingredients:</h4>
                <ul>
                        {view.recipeIngredients.map((ingredient, i) =>
                            <li key={i}>{ingredient}</li>
                        )}
                </ul>

                <p>Instructions: </p>
                <p>{view.recipeInstructions}</p>
                <p>carbs: {view.carbCount}g | protein: {view.proteinCount}g | fat: {view.fatCount}g</p>

                <Link to={`/recipes/${_id}/edit`}><button className='createBtn'>Edit</button></Link> | <button className='deleteBtn' onClick={() => { onDeleteHandler(view._id) }}>Delete</button>

            </div>


        )



}


export default ViewOne;

