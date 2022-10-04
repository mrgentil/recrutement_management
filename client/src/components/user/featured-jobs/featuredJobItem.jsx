import React from "react";
import icon from '../../../assets/images/default.png'
import {Link} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";

const FeaturedJobItem = ({ title, slug, type, company, icon }) => {

    return (
        <div className="featured_job--wrapper__card">
            <div className="featured_job--wrapper__card--left">
                <img src={icon} alt="icon" width="100px" height="100px" />
            </div>
            <div className="featured_job--wrapper__card--right">
                <h1>Software Engineer </h1>
                <p>MrGentil Corporation</p>
                <Link
                    to="#"
                    className={type === "full time" ? "full-time" : "half-time"}
                >
                    {type}
                </Link>
            </div>
        </div>
    );
};

export default FeaturedJobItem;
