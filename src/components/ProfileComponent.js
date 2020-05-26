import React from "react";

const ProfileComponent = () => {
    return(
        <div>

            <div className="container">
                <h1>Profile</h1>
            </div>
            <div className="alert alert-success wbdv-message" role="alert">
                Profile Successfully Saved
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="username">Username</label>

                <div className="col-sm-10">
                    <input
                        id="username"
                        className="form-control wbdv-field wbdv-username"
                        type="text"
                        placeholder="Anu1898"
                    />
                </div>

            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="phone">Phone</label>

                <div className="col-sm-10">
                    <input
                        id="phone"
                        className="form-control wbdv-field wbdv-phone"
                        type="text"
                        placeholder="609-721-3139"
                    />
                </div>

            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="email">Email</label>

                <div className="col-sm-10">
                    <input
                        id="email"
                        className="form-control wbdv-field wbdv-email"
                        type="text"
                        placeholder="kandasamy.a@husky.neu.edu"
                    />
                </div>

            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label wbdv-field wbdv-role">Role</label>

                <div className="col-sm-10">
                    <select className="custom-select">
                        <option value="student" selected>Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="parent">Admin</option>
                    </select>
                </div>

            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="date">Date of Birth</label>

                <div className="col-sm-10">
                    <input
                        id="date"
                        className="form-control wbdv-field wbdv-dob"
                        type="date"
                        value="mm/dd/yyyy"/>


                </div>
            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>

                <div className="col-sm-10">
                    <a href="../profile/profile.template.client.html"
                       className="btn btn-success btn-block wbdv-button wbdv-update">
                        Update
                    </a>
                </div>

            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>

                <div className="col-sm-10">
                    <a href="../index.html"
                       className="btn btn-danger btn-block wbdv-button wbdv-logout">
                        Logout
                    </a>
                </div>

            </div>


        </div>
    )
}

export default ProfileComponent
