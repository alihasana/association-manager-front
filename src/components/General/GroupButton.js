import React from "react";
import {Button, ButtonGroup} from 'react-bootstrap';

const GroupButton = ({ details, onDelete, onEdit }) => (
    <ButtonGroup aria-label="group">
        {/* <Button variant="secondary">
            <i className="fa fa-eye f-22"/>
        </Button> */}
        <Button variant="primary" onClick={() => onEdit()}>
            <i className="fa fa-edit f-22"/>
        </Button>
        <Button variant="danger" onClick={() => onDelete(details.id)}>
            <i className="fa fa-trash f-22"/>
        </Button>
    </ButtonGroup>
);

export default GroupButton;
