import React from "react";
import {Button} from 'react-bootstrap';

const Member = ({ details, onDelete }) => (
    <tr>
        <th>{details.id}</th>
        <td><img className="rounded-circle" style={{width: '40px'}} src={details.avatar} alt="activity-user"/></td> 
        <td>{details.firstName}</td>
        <td>{details.lastName}</td>
        <td>{details.entryDate}</td>
        <td>
            <Button variant="secondary">
                <i className="fa fa-eye f-22 m-r-10"/>
            </Button>
            <Button variant="primary">
                <i className="fa fa-edit f-22 m-r-10"/>
            </Button>
            <Button variant="danger" onClick={() => onDelete(details.id)}>
                <i className="fa fa-trash f-22 m-r-10"/>
            </Button>
        </td>
    </tr>
);

export default Member;