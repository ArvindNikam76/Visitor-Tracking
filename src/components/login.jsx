import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { setUser } from "./service/user"
class LoginForm extends Component {
    state = {
        username: '',
        type: '',
        password: '',
        loginTypes: ['Admin', 'Owner', 'Security']
    };
    setectedUserType = event => {
        this.setState({ type: event.target.value })
        console.log(event.target.value);
    }
    submit = () => {
        console.log("submit")
        const { username, password, type } = this.state;
        const user = { username, password, type };
        setUser(user);
        console.log("user");
        console.log(user);
        //<Redirect to="/visitorform" />
        window.location = "/";
    }
    changePassword = event => {
        this.setState({ password: event.target.value })
    }
    changeUser = event => {
        this.setState({ username: event.target.value })
    }
    render() {
        const user = undefined;
        console.log(user)
        if (user) return <Redirect to="/" />
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
                                            <h1>Login Form</h1>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="m-2">User Name</label>
                                        </td>
                                        <td>
                                            <input
                                                onChange={this.changeUser}
                                                type="text"
                                                className=" m-2 form-control form-control-sm"
                                                id="vname"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="m-2">Password</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                onChange={this.changePassword}
                                                className=" m-2 form-control form-control-sm"
                                                id="purpose"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="m-2"></label>
                                        </td>
                                        <td>
                                            <select className="custom-select custom-select-sm" onChange={this.setectedUserType}>
                                                {this.state.loginTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className="mt-2" >
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mt-3">
                                <button
                                    type="submit"
                                    onClick={this.submit}
                                    className="btn btn-primary mr-5 form-control-sm"
                                >
                                    Login
                                        </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary form-control-sm"
                                >
                                    Reset
                                        </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default LoginForm;
