import { Link } from "react-router-dom";

function NotFound(){
    return(
        <center>
            <div className="notFound">
                <h1>Page non trouvée</h1>
                <Link to="/">page principale</Link>
            </div>  
        </center>
        
    )
}

export default NotFound;