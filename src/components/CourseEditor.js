import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import {Link} from "react-router-dom";

//stateless component
const CourseEditor = () => {
    return(
        <div>
            <Link
                to = "/table/courses">Back</Link>

            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <a className="navbar navbar-light "><h2>Course Editor</h2>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Build</a>
                    </li>
                    <li className="nav-item">
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
                    <ModuleListComponent/>
                </div>
                <div className = "col-8">


            <LessonTabsComponent/>
                    <TopicPillsComponent/>
        </div>
        </div>
        </div>

    )
}

export default CourseEditor