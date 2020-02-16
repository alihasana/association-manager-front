import React from "react";
import GroupButton from '../General/GroupButton'

const Group = ({ details, onDelete, onEdit }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.groupName}</td>

        <td>
            <GroupButton
                details={details}
                onDelete={onDelete}
                onEdit = {onEdit}
            />
        </td>
    </tr>
);

export default Group;
