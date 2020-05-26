import React from "react"
import CourseRowComponent from "./CourseRowComponent"

export default class CourseTableComponent extends React.Component {

render() {
        return(
            <div>
            <h3>Course Table </h3>

                <table className = "table table-striped">
                    <thead>
                    <tr className = "table-light">
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>
                            <button className = "btn btn-white">
                                <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i></button>
                            <button>Grid</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                                <CourseRowComponent
                                    deleteCourse = {this.props.deleteCourse}
                                    key = {course._id}
                                    courses = {course}/>
                            )}

                    </tbody>

                </table>
            </div>

        )
    }
}