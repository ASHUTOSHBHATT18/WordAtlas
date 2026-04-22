import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footers.jsx";
import { Headers } from "../UI/headers.jsx";
export const AppLayout=()=>{
    return(
        <>
            <Headers/>
            <Outlet/>
            <Footers/>
        </>
    )
}