import React from "react";
import JobItem from "./JobItem";

const Jobs = ({ latest }) => {
    return (
        <div className="job">
            <div className="container">
                <div className="job-info">
                    <h1>Dernières offres d'emploi</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                        animi unde architecto magni illo quis id illum aperiam magnam rem.
                    </p>
                </div>
                <div className="job__wrapper">
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
