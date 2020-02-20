import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Aux from "../../hoc/_Aux";
const localizer = momentLocalizer(moment)

let events = [
    {title: 'Event Test 1',start: new Date("2020-03-01"), end: new Date("2020-03-02"), color: 'lightyellow'},
    {title: 'Event Test 2',start: new Date("2020-02-01"), end: new Date("2020-02-03"), color: 'orange'},
    {title: 'Event Test 3',start: new Date("2020-02-05"), end: new Date("2020-02-06"), color: 'lightgreen'},
    {title: 'Event Test 4',start: new Date("2020-02-08"), end: new Date("2020-02-08"), color: 'lightgreen'},
    {title: 'Event Test 5',start: new Date("2020-03-05"), end: new Date("2020-03-05"), color: 'lightgreen'},
    {title: 'Event Test 6',start: new Date("2020-02-15"), end: new Date("2020-02-18"), color: 'lightgreen'},
    {title: 'Event Test 7',start: new Date("2020-02-28"), end: new Date("2020-02-30"), color: 'lightblue'},
];

const MyCalendar = props => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={
            (event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: event.color,
                color: 'black',
                borderRadius: "0px",
                border: "none"
              };
        
              return {
                className: "",
                style: newStyle
              };
            }
          }
      />
    </div>
  )


class PlanningList extends React.Component {
    state = {
      redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = (url) => {
        if (this.state.redirect) {
            return <Redirect to={url}/>
        }
    };

    handleDelete = id => {
        const members = [...this.state.members];
        const index = members.findIndex(member => member.id === id);
        members.splice(index, 1);
        this.setState({ members });
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Plannings</Card.Title>
                                {this.renderRedirect('/admin/plannings/creer')}
                                    <Button variant="success" onClick={this.setRedirect}>
                                        + Créer un nouveau évenement
                                    </Button>
                            </Card.Header>
                            <Card.Body>
                                <MyCalendar/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Aux>
        );
    }
}

export default PlanningList;