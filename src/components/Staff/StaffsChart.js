import React from 'react';
import $ from "jquery";
import OrgChart from "orgchart";
import Aux from "../../hoc/_Aux";

class StaffsChart extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        let data = {
            'name': 'Edouard Yves',
            'title': 'general manager',
            'children': [
                { 'name': 'Brendan Vaillant', 'title': 'department manager', 'className': 'middle-level',
                    'children': [
                        { 'name': 'Jean Yves', 'title': 'senior engineer', 'className': 'product-dept' },
                        { 'name': 'Jeannine Potencier', 'title': 'senior engineer', 'className': 'product-dept',
                            'children': [
                                { 'name': 'To To', 'title': 'engineer', 'className': 'pipeline1' },
                                { 'name': 'Paul Vaillant', 'title': 'engineer', 'className': 'pipeline1' },
                                { 'name': 'Edouard Pepin', 'title': 'engineer', 'className': 'pipeline1' }
                            ]
                        }
                    ]
                },
                { 'name': 'Douglas Sandberg', 'title': 'department manager', 'className': 'middle-level',
                    'children': [
                        { 'name': 'Ronaldo Perez', 'title': 'senior engineer', 'className': 'rd-dept' },
                        { 'name': 'Douglas Crockford', 'title': 'senior engineer', 'className': 'rd-dept',
                            'children': [
                                { 'name': 'Ronaldo Vaillant', 'title': 'UE engineer', 'className': 'frontend1' },
                                { 'name': 'Sheryl Sandberg', 'title': 'engineer', 'className': 'frontend1' },
                                { 'name': 'Brendan Eich', 'title': 'engineer', 'className': 'frontend1' }
                            ]
                        }
                    ]
                }
            ]
        };

        this.$el.orgchart({
            'id': 'rootNode',
            'data' : data,
            'nodeContent': 'title',
            'pan': true,
        });
    }

    componentWillUnmount() {
        this.$el.empty();
    }

    render() {
        return (
            <Aux>
                <div id="chart-container" ref={el => this.el = el}></div>
            </Aux>
        );
    }
}

export default StaffsChart;
