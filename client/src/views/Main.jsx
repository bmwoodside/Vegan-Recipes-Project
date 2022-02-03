import { Link } from "react-router-dom";

const Main = (props) => {

    return (
        <div>

            <div id="center">
                <div className="mainTitle"><h1 id="vegan">Vegan Recipes </h1></div>
                <div className="mainTitle">
                    <h3 id="vegan2" > LifeStyle</h3>
                </div>
            </div>

            <div>


            </div>
            <div className="container">
                <div className="leftBox">
                    <p>Purpose of this website is for users to post vegan recipes that do well to accommodate people who are athletic, and/or are food conscious.  Currently, there are not many resources available for vegan nutrition that accurately  match nutritional needs for people with active lifestyles.  Recipes posted here should strive to be:
                    1. simple
                    2. good macro-nutrient distribution
                    3. tastes good
                </p>
                <p>Enjoy!</p>
                </div>
                <div className="rightBox">
                    <h1> right</h1>
                </div>
            </div>


        </div>
    )
}

export default Main;