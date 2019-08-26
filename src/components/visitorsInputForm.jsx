import React, { Component } from "react";
import { getUser } from './service/user'
import { Redirect } from 'react-router-dom';

class VisitorInputForm extends Component {
  state = {
    visitPurpose: ['delivery', 'guest', 'plumbing', 'made'],
    user: ''
  };
  setVisitPurpose = event => {
    console.log(event.target.value)
  }
  componentDidMount() {
    const user = getUser();
    this.setState({ user });
    console.log("user");
    console.log(user);
  }
  render() {
    const user = getUser();
    if (!user) return <Redirect to="/login" />
    return (
      <div>
        <main role="main" className="container">
          <div className="row">
            <div className="col-3" />
            <div className="col">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>
                      {" "}
                      <h1>Enter Visitor details</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="m-2">Name</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className=" m-2 form-control form-control-sm"
                        id="vname"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="m-2">To Whome Contact</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className=" m-2 form-control form-control-sm"
                        id="purpose"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="m-2">Purpose</label>
                    </td>
                    <td>
                      <select className="custom-select custom-select-sm" onChange={this.setVisitPurpose}>
                        {this.state.visitPurpose.map(purpose => <option value={purpose} key={purpose}> {purpose}</option>)}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-primary form-control-sm"
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default VisitorInputForm;
