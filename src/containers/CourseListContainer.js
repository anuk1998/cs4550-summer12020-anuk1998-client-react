import React from "react"
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService from "../services/CourseService";


class CourseListContainer extends React.Component {

    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: 'New Title'
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(actualArrayOfCourses =>
                this.setState({
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

    addCourse = (title) =>
        CourseService.createCourse({
            title: title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState((prevState) => {
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
                    .courses.filter(course => course !== courseToDelete)
            })))
    }


    render() {
        return (
            <div>

                <h2>Course Manager</h2>
                <input className=""
                       onChange={(event) => this.setState({
                           newCourseTitle: event.target.value
                       })}
                       value={this.state.newCourseTitle}
                       placeholder="Course Title"/>

                <button
                    className="btn btn-primary "
                    onClick={
                        () => this.addCourse(this.state.newCourseTitle)}>
                    <i className="fa fa-plus" aria-hidden="true"></i></button>

                <br/>
                {
                    this.state.layout == 'table' &&
                    <div>
                        <button className="float-right btn btn-white ">
                            <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i></button>
                        <button
                            className="float-right btn btn-white"
                            onClick={() => this.setLayout('grid')}>
                            <i className="fa fa-th" aria-hidden="true"></i>
                        </button>
                        <CourseTableComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
                {
                    this.state.layout == 'grid' &&
                    <div>
                        <button className="float-right btn btn-white ">
                            <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i></button>
                        <button
                            className="float-right btn btn-white"
                            onClick={() =>
                                this.setLayout('table')}>
                            <i className="fa fa-list" aria-hidden="true"></i>
                        </button>
                        <CourseGridComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
            </div>

        )
    }
}

export default CourseListContainer
