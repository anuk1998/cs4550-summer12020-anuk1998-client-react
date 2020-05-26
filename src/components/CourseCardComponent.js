import React from "react";
import CourseService from "../services/CourseService";
import {Link} from "react-router-dom";

export default class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        courses: this.props.courses
    }
    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () => {
        CourseService.updateCourse(
            this.state.courses._id,
            this.state.courses)
            .then(status => this.setEditing(false))
    }

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            courses: {
                ...prevState.courses,
                title: newTitle
            }
        }))


    render() {
        return (
            <div>
                <div className="card" styles={{width: '18rem'}}>
                    <img className="card-img-top"
                         src="https://picsum.photos/300/200"/>

                    <div className="card-body">

                        <h5 className="card-title">{this.state.courses.title}</h5>

                        <tr >
                            <td>
                                {
                                    !this.state.editing &&
                                    <Link to={`/editor/${this.state.courses._id}`}>
                                        {this.state.courses.title}
                                    </Link>
                                }
                                {this.state.editing && <input
                                    className = "form-control"
                                    onChange = {(event) => this.updateCourseTitle(event.target.value) }
                                    value = {this.state.courses.title}/>}
                            </td>

                            <td>{this.state.courses.owner}</td>

                            <td>{this.state.courses.modified}</td>
                            <td>
                                {
                                    !this.state.editing &&
                                    <button
                                        className = "btn btn-white"
                                        onClick={() => this.setEditing(true)}>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </button>
                                }
                                {
                                    this.state.editing &&
                                    <span>
                <button
                    className = "btn btn-success "
                    onClick = {this.ok}>
                   <i className="fa fa-check" aria-hidden="true"></i></button>
                <button
                    className = "btn btn-danger"
                    onClick = {
                        () => this.props.deleteCourse(this.props.courses)}>
                    <i className="fa fa-trash" aria-hidden="true"></i></button>
            </span>
                                }
                            </td>
                        </tr>






                    </div>
                </div>



            </div>)
    }
}
