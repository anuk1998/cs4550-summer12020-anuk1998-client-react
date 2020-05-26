import React from "react";
import CourseCardComponent from './CourseCardComponent';

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
        <h3>Course Grid {this.props.courses.length}</h3>
        <div className="container-fluid">
            <h1>Course Grid</h1>
            <div className="card-deck">
                {
                    this.props.courses.map(course =>
                        <CourseCardComponent
                            deleteCourse = {this.props.deleteCourse}
                            key = {course._id}
                            courses = {course}/>
                    )}

            </div>
        </div>
            </div>
    )
    }
}
