import React from "react";
import GroupButton from '../General/GroupButton'

const Group = ({ details, onDelete, onEdit, isAdminOrSuperAdmin }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.groupName}</td>
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

export default Group;
