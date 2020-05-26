import React from "react";

    const RegisterComponent = () => {
        return (
            <div>
                <div className="container">
                    <h1>Register</h1>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"
                               htmlFor="username">Username</label>

                        <div className="col-sm-10">
                            <input
                                id="username"
                                className="form-control wbdv-field wbdv-username"
                                type="text"
                                placeholder="joe123"
                                title="Use this username to login"/>
                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"
                               htmlFor="password">Password</label>

                        <div className="col-sm-10">
                            <input
                                id="password"
                                className="form-control wbdv-field wbdv-password"
                                type="text"
                                placeholder="#abd%2@l"
                                title="Use this password to login"
                            />
                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"
                               htmlFor="verify-password">Verify Password</label>

                        <div className="col-sm-10">
                            <input
                                id="verify-password"
                                className="form-control wbdv-field wbdv-password-verify"
                                type="text"
                                placeholder="#abd%2@l"
                                title="Verify Password"
                            />
                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>

                        <div className="col-sm-10">
                            <a href="../profile/profile.template.client.html"
                               className="btn btn-primary btn-block wbdv-button wbdv-register">
                                Register
                            </a>

                            <a href="../index.html"
                               className="">
                                <button className="btn btn-danger">Cancel</button>

                            </a>

                            <a className="float-right wbdv-link wbdv-login" href="../login/login.template.client.html">
                                Login
                            </a>

                        </div>

                    </div>


                </div>
            </div>
        )}
        export default RegisterComponent
