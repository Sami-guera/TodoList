import React from "react";
import { Link } from "react-router-dom";

function Mainpage() {

    return (


        <div className="mainpage">
            <Link to={"/login"}>{"login"}</Link>
            <br/>
            <Link to={"/register"}>{"register"}</Link>
        </div>
    )
}
export default Mainpage;