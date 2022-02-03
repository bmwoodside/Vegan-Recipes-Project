import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ViewOne = (props) => {
    const [disableLikeButton, setDisableLikeButton] = useState(false);
    const [view, setView] = useState({
        recipeIngredients: []
    });
    const {_id} = useParams();
    

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
        // console.log(arrIndex);

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


        return(

            <div className='w-50 mx-auto'>
                <h1>{view.recipeName}</h1>
                <img src={view.recipeURL} alt={view.recipeURL} />
                <h1><button className='btn btn-warning' onClick={()=>onLikeHandler(view._id)} disabled={disableLikeButton}>👍{view.recipeLikes}</button></h1>
                <ul>
                        {view.recipeIngredients.map((ingredient, i) =>
                            <li key={i}>{ingredient}</li>
                        )}
                </ul>
                <p>Instructions: {view.recipeInstructions}</p>
                <p>carbs: {view.carbCount}g  protein: {view.proteinCount}g  fat: {view.fatCount}g</p>
                <h1><button className='btn'>👍</button></h1>
            </div>


        )



}


export default ViewOne;

