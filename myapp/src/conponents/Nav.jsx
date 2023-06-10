import { Link } from "react-router-dom";





export default function Nav(){
    return (

        <nav>
            <Link to="/PostData"><button>Post Data</button></Link><Link to="/retrive"><button> Retrieve Data</button></Link>
        </nav>
    )
}