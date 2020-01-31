import React from 'react';
import $ from "jquery";
import OrgChart from "orgchart";

class StaffsList extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        let data = {
            'name': 'Lao Lao',
            'title': 'general manager',
            'children': [
                { 'name': 'Bo Miao', 'title': 'department manager', 'className': 'middle-level',
                    'children': [
                        { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'product-dept' },
                        { 'name': 'Li Xin', 'title': 'senior engineer', 'className': 'product-dept',
                            'children': [
                                { 'name': 'To To', 'title': 'engineer', 'className': 'pipeline1' },
                                { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'pipeline1' },
                                { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'pipeline1' }
                            ]
                        }
                    ]
                },
                { 'name': 'Su Miao', 'title': 'department manager', 'className': 'middle-level',
                    'children': [
                        { 'name': 'Pang Pang', 'title': 'senior engineer', 'className': 'rd-dept' },
                        { 'name': 'Hei Hei', 'title': 'senior engineer', 'className': 'rd-dept',
                            'children': [
                                { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'frontend1' },
                                { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'frontend1' },
                                { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'frontend1' }
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
            <div id="chart-container" ref={el => this.el = el}></div>
        );
    }
}

export default StaffsList;
