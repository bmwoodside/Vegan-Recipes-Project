import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const ViewAllRecipes = (props) => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipes/findall")
        .then(res=>{
            console.log(res.data);
            setRecipes(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    

    return (
        <div className='w-75 mx-auto mt-5'>
            <Link to="/recipes/create" className='mb-5 btn btn-lg btn-success'>Add a recipe </Link>

            {
                recipes.map((item, i) => {
                    return (
                    <div className=" mx-auto recipe">
                            <img src={item.recipeURL} alt={item.recipeURL}></img>
                            <h3>{item.recipeName}</h3>
                            <p>Number of Likes: {item.recipeLikes}</p>
                            <p>{item.recipeDescription}</p>
                            <Link to={`/recipes/${item._id}`} className='btn btn-primary btn-lg'>View Recipe</Link>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default ViewAllRecipes;
