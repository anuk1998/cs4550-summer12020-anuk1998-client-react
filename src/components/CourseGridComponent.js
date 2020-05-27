import React from "react";
import CourseCardComponent from './CourseCardComponent';

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h3>Course Grid</h3>
                    <div className="card-deck">
                        {
                            this.props.courses.map(course =>
                                <CourseCardComponent
                                    deleteCourse={this.props.deleteCourse}
                                    key={course._id}
                                    courses={course}/>
                            )}

                    </div>
                </div>
            </div>
        )
    }
}
