import React from "react"
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseService from "../services/CourseService";

class CourseListContainer extends React.Component {

    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: 'New Title'
    }

    componentDidMount() {
        CourseService.findAllCourses()
                    .then(actualArrayOfCourses => this.setState({
                        courses: actualArrayOfCourses
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    }


    //equal to function setLayout() {}
    //this is new syntax
    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    }

    addCourse = (title)  =>
        CourseService.createCourse({
            title: title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState( (prevState) => {
                    return {
                        courses: [
                            ...prevState.courses,
                            theActualNewCourse
                        ]
                    }
                }))



    deleteCourse = (courseToDelete) => {
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                    courses: prevState
                        .courses.filter(course => course !== courseToDelete
                        )

                })))
    }


    render() {
        return (
            <div>
                <h2>CourseList {this.state.courses.length}</h2>
                <input
                    onChange = {(event) => this.setState({
                        newCourseTitle: event.target.value
                    })}
                    value = {this.state.newCourseTitle}
                    placeholder = "Course Title"/>
                <button onClick = {
                    () => this.addCourse(this.state.newCourseTitle)}>
                    Add Course</button>

                <br/>
                {
                    this.state.layout == 'table' &&
                        <div>
                            <button
                                onClick = {() => this.setLayout('grid')}>
                                Grid
                            </button>
                    <CourseTableComponent
                        deleteCourse = {this.deleteCourse}
                        courses = {this.state.courses}/>
                        </div>
                }
                {
                    this.state.layout == 'grid' &&
                    <div>
                        <button onClick = {() => this.setLayout('table')}>
                            Table
                        </button>
                    <CourseGridComponent courses = {this.state.courses}/>
                    </div>
                }
            </div>

    )
    }
}

export default CourseListContainer
