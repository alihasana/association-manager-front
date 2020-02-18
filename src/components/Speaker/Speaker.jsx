import React from "react";
import GroupButton from '../General/GroupButton';

const Speaker = ({ details, onDelete, onEdit }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.firstName}</td>
        <td>{details.lastName}</td>
        <td>{details.email}</td>
        <td>
        <GroupButton
            details={details}
            onDelete={onDelete}
            onEdit = {onEdit}
        />
        </td>
    </tr>
);

export default Speaker;