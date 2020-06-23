import React from "react";

export default class ProfileComponent extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            sections: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(e => {
                this.props.history.push("/")
            })
            .then(user => {
                if(user)
                    this.setState({
                        user: user
                    })
            })
    }

    update = () => {
        fetch("http://localhost:8080/api/profile", {
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                username: user.username, password: user.password
            }))
    }

    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))

    }
    render() {
        return(
            <div>
                <h1>Profile</h1>
                <input
                    value={this.state.user.username}
                    onChange={(e) => this.setState({
                        user: {
                            username: e.target.value
                        }})}
                    className="form-control"/>
                <input
                    value={this.state.user.password}
                    onChange={(e) => this.setState({
                        user: {password: e.target.value}})}
                    className="form-control"/>
                <button
                    onClick={this.update}
                    className="btn btn-primary">
                    Update
                </button>
                <button
                    className="btn btn-danger"
                    onClick={this.logout}>
                    Sign out
                </button>
                {
                    this.state.user && this.state.user.sections.length > 0 &&
                    <div>
                        <h3>Sections</h3>
                        <ul className="list-group">
                            {this.state.user.sections.map(section =>
                                <li key={section.id}
                                    className="list-group-item">
                                    {section.title}
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}





/*
import React from "react";

const ProfileComponent = () => {
    return (
        <div>

            <div className="container">
                <h1>Profile</h1>
            </div>
            <div className="alert alert-success " role="alert">
                Profile Successfully Saved
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="username">Username</label>

                <div className="col-sm-10">
                    <input
                        id="username"
                        className="form-control "
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
                        className="form-control "
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
                        className="form-control"
                        type="text"
                        placeholder="kandasamy.a@husky.neu.edu"
                    />
                </div>

            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label ">Role</label>

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
                        className="form-control"
                        type="date"
                        value="mm/dd/yyyy"/>


                </div>
            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>

                <div className="col-sm-10">
                    <a href=""
                       className="btn btn-success btn-block">
                        Update
                    </a>
                </div>

            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>

                <div className="col-sm-10">
                    <a href=""
                       className="btn btn-danger btn-block">
                        Logout
                    </a>
                </div>

            </div>


        </div>
    )
}

export default ProfileComponent
*/
