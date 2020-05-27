import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import {Link} from "react-router-dom";

//stateless component
const CourseEditor = () => {
    return (
        <div>


            <div>

                <ul className="nav nav-tabs">
                    <li>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#"></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button></nav>

                    </li>
                    <li><h3>Course Editor</h3></li>
                    <li className="nav-item">
                        <a className="nav-link">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active">Pages</a></li>
                    <li className="nav-item">
                        <a className="nav-link">Theme</a></li>
                    <li className="nav-item">
                        <a className="nav-link">Store</a></li>
                    <li className="nav-item">
                        <a className="nav-link">Apps</a></li>
                    <li className="nav-item">
                        <a className="nav-link">Settings</a>
                    </li>

                </ul>
            </div>


            <div className="row">
                <div className="col-4">
                    <ModuleListComponent/>
                    <Link
                        to="/table/courses">Back</Link>
                </div>
                <div className="col-8">


                    <LessonTabsComponent/>
                    <TopicPillsComponent/>

                </div>
            </div>
        </div>

    )
}

export default CourseEditor