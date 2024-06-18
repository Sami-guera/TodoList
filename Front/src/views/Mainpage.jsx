import React from "react";
import { Link } from "react-router-dom";

function Mainpage() {

    return (


        <div className="mainpage">
            <Link to={"/login"} className="link">{"login"}</Link>
            <br/>
            <Link to={"/register"} className="link">{"register"}</Link>
        </div>
    )
}
export default Mainpage;