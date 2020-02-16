import React from "react";
import {Button, ButtonGroup} from 'react-bootstrap';

const GroupButton = ({ details, onDelete }) => (
    <ButtonGroup className="mr-2" aria-label="group">
        <Button variant="secondary">
            <i className="fa fa-eye f-22 m-r-1"/>
        </Button>
        <Button variant="primary">
            <i className="fa fa-edit f-22 m-r-1"/>
        </Button>
        <Button variant="danger" onClick={() => onDelete(details.id)}>
            <i className="fa fa-trash f-22 m-r-1"/>
        </Button>
    </ButtonGroup>
);

export default GroupButton;
