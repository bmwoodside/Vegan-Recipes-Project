
import { Link } from "react-router-dom";

const AboutUs = (props) => {

    return (
        <div>
            <h1>Homepage Test</h1>

            <Link to="/"><button className="btn btn-success">Get Started!</button></Link>

            <div class="background">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>

        </div>
    )
}

export default AboutUs;

