import { Link } from "react-router-dom";

function NotFound(){
    return(
        <center>
            <div className="notFound">
                <h1>Page not found</h1>
                <Link to="/">return to main page</Link>
            </div>  
        </center>
        
    )
}

export default NotFound;