import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
    state = {
        username: '',
        password: ''
    }
    login = () => {
        fetch("http://localhost:8080/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if(currentUser)
                    this.props.history.push("/profile")
            })

    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <input
                    onChange={(e) => this.setState({username: e.target.value})}
                    className="form-control"/>
                <input
                    onChange={(e) => this.setState({password: e.target.value})}
                    className="form-control"/>
                <button
                    onClick={this.login}
                    className="btn btn-primary">
                    Login
                </button>
                <Link to="/register">Sign up</Link>
            </div>
        )
    }
}



/*
import React from "react";

const LoginComponent = () => {
    return (
        <div>
            <div className="container">
                <h1>Login</h1>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"
                           htmlFor="username">Username</label>

                    <div className="col-sm-10">
                        <input
                            id="username"
                            className="form-control"
                            type="text"
                            placeholder="joe123"
                            title="Use this username to login"/>
                    </div>

                </div>

                <br/>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"
                           htmlFor="password">Password</label>

                    <div className="col-sm-10">
                        <input
                            id="password"
                            className="form-control "
                            type="text"
                            placeholder="#abd%2@l"
                            title="Use this password to login"
                        />
                    </div>

                </div>


                <br/>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>

                    <div className="col-sm-10">

                        <a href=""
                           className="btn btn-primary btn-block">
                            Login
                        </a>

                        <a href="" className="">
                            Forgot Password?
                        </a>


                        <a href=""
                           className="float-right">
                            Register
                        </a>


                    </div>

                    <a href=""
                       className="">
                        <button className="btn btn-danger">Cancel</button>

                    </a>

                </div>

            </div>
        </div>
    )
}
export default LoginComponent*/
