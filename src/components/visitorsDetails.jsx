import React, { Component } from 'react';
class VisitorDetails extends Component {
    state = {
        visitorDetails: [
            {
                id: 123,
                name: 'abc1',
                purpose: 'delivery',
                owner: '202',
                permission: false
            },
            {
                id: 1234,
                name: 'abc2',
                purpose: 'delivery',
                owner: '102',
                permission: false
            },
            {
                id: 1235,
                name: 'abc3',
                purpose: 'guest',
                owner: '502',
                permission: false
            },
            {
                id: 1236,
                name: 'abc4',
                purpose: 'delivery',
                owner: '405',
                permission: true
            },
            {
                id: 1237,
                name: 'abc5',
                purpose: 'Gust',
                owner: '303',
                permission: true
            },
        ]
    };
    getThumbClass = status => {
        console.log(status)
        return status ? "fa fa-thumbs-up colGreen" : "fa fa-thumbs-down colRed"
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>purpose</th>
                            <th>owner</th>
                            <th>permission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.visitorDetails.map(visitor => {
                            return (
                                <tr key={visitor.id}>
                                    <td>{visitor.name}</td>
                                    <td>{visitor.purpose}</td>
                                    <td>{visitor.owner}</td>
                                    <td><i className={this.getThumbClass(visitor.permission)} aria-hidden="true" fill="red"></i></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table></div>
        );
    }
}
export default VisitorDetails; 