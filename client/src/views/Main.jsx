import { Link } from "react-router-dom";

const Main = (props) => {

    return (
        <div>
            <h1>Homepage Test</h1>

            <Link to="/"><button className="btn btn-success">Get Started!</button></Link>

        </div>
    )
}

export default Main;