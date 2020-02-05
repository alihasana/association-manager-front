import React from "react";
import DEMO from "../../store/constant";

const Transaction = ({ details }) => (
    
    <tr className="unread">
        <th>{details.id}</th>
        <td>
            <h6 className="mb-1">{details.object}</h6>
            <p className="m-0">{details.comment}</p>
        </td>
        <td>
            <h6 className="mb-1">{details.type}</h6>
        </td>
        <td>
            <h6 className="text-muted">{/*<i className="fa fa-circle text-c-green f-10 m-r-15"/>*/}{details.date}</h6>
        </td>
        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
    </tr>
);

export default Transaction;