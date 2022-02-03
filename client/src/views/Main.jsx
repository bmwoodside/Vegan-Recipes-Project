import { Link } from "react-router-dom";

const Main = (props) => {

    return (
        <div>
            <h1>VeganRecipeLifestyle</h1>
            <p>Purpose of this website is for users to post vegan recipes that do well to accommodate people who are athletic, and/or are food conscious.  Currently, there are not many resources available for vegan nutrition that accurately  match nutritional needs for people with active lifestyles.  Recipes posted here should strive to be:
                1. simple
                2. good macronutrient distribution
                3. tastes good
            </p>

            <Link to="/recipes/viewall"><button className="btn btn-success">Get Started!</button></Link>



        </div>
    )
}

export default Main;