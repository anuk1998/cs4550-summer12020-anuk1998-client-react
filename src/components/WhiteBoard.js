import React from 'react'
import CourseListComponent from "./CourseListComponent";

class WhiteBoard extends React.Component{
    render() {
        return(
            <div>
            <h1>WhiteBoard</h1>
            <CourseListComponent>Course List</CourseListComponent>
            </div>
        )
    }
}

export default WhiteBoard