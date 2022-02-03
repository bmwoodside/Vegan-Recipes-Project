import { Link } from "react-router-dom";

const AboutUs = (props) => {


    return (
        <div>
            <h1>About Us</h1>

            <Link to="/"><button className="btn btn-success">Get Started!</button></Link>

            <div class="background">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>


            <div>
                <h1>Three graduates of Coding Dojo software engineering program:</h1>
                <div className="personContainer">
                    <img src="./images/brendanProfilePhoto.jpeg" alt="brendanProfilePhoto" />
                    <h3>Brendan Linas Butkus</h3>
                    <p>Background in health coaching and yoga. Favorite programming language is Pascal</p>
                </div>
                <div className="personContainer">
                    <img src="./images/johnProfilePhoto.png" alt="johnProfilePhoto" />
                    <h3>John Londono</h3>
                    <p>Background in photography.  Favorite programming language is C#.</p>
                </div>
                <div className="personContainer">
                    <img src="./images/mattProfilePhoto.png" alt="" />
                    <h3>Matt Woodside</h3>
                    <p>Gamer, programmer.  Favorite programming language is React</p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;

