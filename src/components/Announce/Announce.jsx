import React from "react";
import GroupButton from '../General/GroupButton';

const Announce = ({ details, onDelete, onEdit, isAdminOrSuperAdmin }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.name}</td>
        <td>{details.duration}</td>
        <td>{details.assocationType}</td>
        <td>{details.region}</td>
        <td>{details.ville}</td>
        <td>{details.age}</td>
        <td>{details.linkMobile}</td>
        <td>{details.linkComputer}</td>
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

export default Announce;
