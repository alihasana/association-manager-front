import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Transaction from "../Transaction/Transaction";

import Aux from "../../hoc/_Aux";

class TransactionList extends React.Component {

    state = {
        transactions: [
          { id: 1, object: "Isabella Christensen", comment:"Lorem Ipsum is simply dummy text of…", type: "De Vassart", date: "11 MAI 12:56" },
          { id: 2, object: "Mathilde Andersen", comment:"Lorem Ipsum is simply dummy text of…", type: "Couteau", date: "11 MAI 10:35" },
          { id: 3, object: "Karla Sorensen", comment:"Lorem Ipsum is simply dummy text of…", type: "Venard", date: "9 MAI 17:38" },
          { id: 4, object: "Ida Jorgensen", comment:"Lorem Ipsum is simply dummy text of…", type: "Suarez", date: "19 MAI 12:56" },
          { id: 5, object: "Albert Andersen", comment:"Lorem Ipsum is simply dummy text of…", type: "Perez", date: "21 Juillet 12:56" },
        ]
      };

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Liste des transactions</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Objet</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.transactions.map(transaction => (
                                        <Transaction
                                            key={transaction.id}
                                            details={transaction}
                                        />
                                    ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default TransactionList;