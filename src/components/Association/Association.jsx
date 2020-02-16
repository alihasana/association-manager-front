import React from "react";
import GroupButton from '../General/GroupButton'

const Association = ({ details, onDelete, onEdit }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.name}</td>
        <td>{details.type}</td>
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

export default Association;