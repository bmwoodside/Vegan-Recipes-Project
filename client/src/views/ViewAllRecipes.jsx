import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import Logo from '../../public/static/imgs/logo512.png'


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
            <div className='mb-5'>
            <Link to="/recipes/create" className='mb-5 createBtn3'>Add a recipe </Link>

            </div>

            {
                recipes.map((item, i) => {
                    return (
                    <div className=" mx-auto recipe">
                            {
                                item.recipeURL == ""
                                ? <img src="../stockPhoto.jpg" alt="" />
                                : <img src={item.recipeURL} alt={item.recipeURL}></img>
                            }
                            
                            <h2>{item.recipeName}</h2>
                            <h3>Likes: {item.recipeLikes}</h3>
                            <h4>{item.recipeDescription}</h4>
                            <Link to={`/recipes/${item._id}`} className='createBtn2'>View Recipe</Link>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default ViewAllRecipes;
