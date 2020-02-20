import React from "react";
import GroupButton from '../General/GroupButton';

const Speaker = ({ details, onDelete, onEdit, isAdminOrSuperAdmin }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.firstName}</td>
        <td>{details.lastName}</td>
        <td>{details.email}</td>
        {(isAdminOrSuperAdmin) ? (
            <td>
                <GroupButton
                    details={details}
                    onDelete={onDelete}
                    onEdit = {onEdit}
                />
            </td>
        ):<td></td>}
    </tr>
);

export default Speaker;