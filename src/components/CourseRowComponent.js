import React from "react";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";

export default class CourseRowComponent extends React.Component {
    //local state
    state = {
        editing: false,
        courses:  this.props.courses
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
        <tr className = {this.state.editing ? 'table-primary' : ''}>
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
                {!this.state.editing &&
                <button
                    className = "btn btn-primary"
                    onClick={() => this.setEditing(true)}>
                    Edit
                </button>
                }
                {this.state.editing &&
                <span>
                <button
                    className = "btn btn-success"
                    onClick = {this.ok}>Ok</button>

                <button
                    className = "btn btn-danger"
                    onClick = {() => this.props.deleteCourse(this.props.courses)}>
                    Delete</button>
            </span>
                }
                </td>
        </tr>
    )
}
}