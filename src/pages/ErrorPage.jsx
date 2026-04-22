import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ErrorPage=()=>{
    
    const error=useRouteError();
    console.log(error);

    const navigate=useNavigate();

    return(
        <>
        <h1>Opp's some ERROR occurred</h1>
        <p>{error.data}</p>
        <button onClick={()=>navigate("/")}>Go Back</button>
        </>
    )
}