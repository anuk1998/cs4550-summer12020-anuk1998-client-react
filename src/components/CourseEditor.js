import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {Link} from "react-router-dom";
//stateless component
const CourseEditor = () => {
    return(
        <div>
            <Link to = "/table/courses">Back</Link>

            <div>

                <ul className="nav nav-tabs float-right">
                    <li>
                        <a className="navbar navbar-light wbdv-course-title"><h3>Course Editor</h3>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Build</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a className="nav-link active">Pages</a></li>
                    <li className="nav-item">
                        <a className="nav-link" >Theme</a></li>
                    <li className="nav-item">
                        <a className="nav-link" >Store</a></li>
                    <li className="nav-item">
                        <a className="nav-link" >Apps</a></li>
                    <li className="nav-item">
                        <a className="nav-link">Settings</a>
                    </li>
                </ul>
            </div>










            <div className = "row">
                <div className = "col-4">
                    <ModuleList/>
                </div>
                <div className = "col-8">


            <LessonTabs/>
            <h3>Topic Pills</h3>
            <h3>Widget List</h3>
        </div>
        </div>
        </div>

    )
}

export default CourseEditor