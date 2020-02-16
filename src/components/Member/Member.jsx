import React from "react";
import GroupButton from '../General/GroupButton'

const Member = ({ details, onDelete, onEdit }) => (
    <tr>
        <th>{details.id}</th>
        <td><img className="rounded-circle" style={{width: '40px'}} src={details.avatar} alt="activity-user"/></td> 
        <td>{details.firstName}</td>
        <td>{details.lastName}</td>
        <td>{details.entryDate}</td>
        <td>
            <GroupButton
                details={details}
                onDelete={onDelete}
                onEdit = {onEdit}
            />
        </td>
    </tr>
);

export default Member;