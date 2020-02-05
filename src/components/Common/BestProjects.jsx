import React from "react";

const BestProjects = ({ details }) => (
    <div className="col-xl-12">
        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>{details.rating}</h6>
        <h6 className="align-items-center float-right">{details.projectName}</h6>
        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: details.percentage}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
        </div>
    </div>


);

export default BestProjects;