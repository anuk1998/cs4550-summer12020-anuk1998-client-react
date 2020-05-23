import React from "react"
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";

class CourseListComponent extends React.Component {

    state = {
        layout: 'grid'
    }

    //equal to function setLayout() {}
    //this is new syntax
    setLayout = (layout) => {
        this.setState( {
            layout: layout
        })
    }
    render() {
        return (
            <div>
                <h2>CourseList</h2>
                <button
                    onClick = {() => this.setLayout('grid')}>
                    Grid
                </button>
                <button onClick = {() => this.setLayout('table')}>
                    Table
                </button>
                {
                    this.state.layout == 'table' && <CourseTableComponent></CourseTableComponent>
                }
                {
                    this.state.layout == 'grid' && <CourseGridComponent></CourseGridComponent>
                }
            </div>

    )
    }
}

export default CourseListComponent
