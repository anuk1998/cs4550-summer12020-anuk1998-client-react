import React from "react";

const LoginComponent = () => {
    return(
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
        )}
export default LoginComponent