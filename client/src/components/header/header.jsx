import React from "react";
import "./header.css";

const Header = (props) => {
    return (
        <div className="header card text-class">
            <div className="row justify-content-center">
                <div className="col-12 transparent">
                    <h3>Book Search</h3>
                    <h6>Search for and save books of interest!</h6>
                </div>
            </div>
        </div>

    )
}

export default Header;