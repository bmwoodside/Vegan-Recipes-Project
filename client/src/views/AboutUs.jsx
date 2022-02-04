// import { Link } from "react-router-dom";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ReactDOM } from "react-dom";



const AboutUs = (props) => {


    return (
        <div>
            <div id="aboutUs">
            <h1 >About Us</h1>
            </div>

            {/* <Link to="/"><button className="btn btn-success">Get Started!</button></Link> */}

            <div class="background">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>


            <div>
                {/* <h1>Three graduates of Coding Dojo software engineering program:</h1> */}
                <div className="peopleContainer">
                    <div className="personContainer">
                        <img src="./images/brendanProfilePhoto.jpeg" alt="brendanProfilePhoto" />
                        <h3>Brendan Linas Butkus</h3>
                        <p>Background in health coaching/yoga. Favorite programming language is Pascal. Graduate of Coding Dojo's  bootcamp.  Languages covered include: Python, C#, and MERN.</p>
                        <a href="https://www.linkedin.com/in/brendan-linas-butkus-31722627/" className="btn btn-primary">LinkedIn</a>
                        <a href="https://github.com/brendanbutkus" className="btn btn-dark" >GitHub</a>
                    </div>
                    <div className="personContainer">
                        <img src="./images/johnProfilePhoto.png" alt="johnProfilePhoto" />
                        <h3>John Londono</h3>
                        <p>Background in photography.  Favorite programming language is C#. Graduate of Coding Dojo's bootcamp.  Languages covered include: Python, C#, and MERN.</p>
                        <a href="#" className="btn btn-primary">LinkedIn</a>
                        <a href="https://github.com/JohnPaul-Londono" className="btn btn-dark">GitHub</a>
                        
                    </div>
                    <div className="personContainer">
                        <img src="./images/mattProfilePhoto.png" alt="" />
                        <h3>Matt Woodside</h3>
                        <p>Gamer, programmer, pilot.  Favorite programming language is Java. Graduate of Coding Dojo's bootcamp.  Languages covered include: Python, Java, and MERN.</p>
                        <a href="https://www.linkedin.com/in/bryan-woodside/" className="btn btn-primary">LinkedIn</a>
                        <a href="https://github.com/bmwoodside" className="btn btn-dark">GitHub</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;

