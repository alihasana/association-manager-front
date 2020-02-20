import React from "react";
import GroupButton from '../General/GroupButton';

const Association = ({ details, onEdit, onDelete, isSuperAdmin }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.name}</td>
        <td>{details.type}</td>
        <td>{details.entryDate}</td>
        {(isSuperAdmin) ? (
            <td>
                <GroupButton
                    details={details}
                    onEdit = {onEdit}
                    onDelete={onDelete}
                />
            </td>
        ):<td></td>}
    </tr>
);

export default Association;