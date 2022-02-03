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
                    <div className="topBox">
                        <p>Purpose of this website is for users to post vegan recipes that do well to accommodate people who are athletic, and/or are food conscious.  Currently, there are not many resources available for vegan nutrition that accurately  match nutritional needs for people with active lifestyles.</p>
                    </div>
                    <div className="bottomBox">
                        <p > Recipes posted here should strive to be:
                            <div id="flip">
                                <div> <div>Simple</div></div>
                                <div> <div>Macro Distributed</div></div>
                                <div> <div>Delicious</div></div>
                            </div>
                        </p>
                        <p id="enjoy">Enjoy!</p>
                    </div>

                </div>
                <div className="rightBox">
                    <h1> right</h1>
                </div>
            </div>


        </div>
    )
}

export default Main;