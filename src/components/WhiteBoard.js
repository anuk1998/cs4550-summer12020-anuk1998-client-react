import React from 'react'
import CourseListContainer from "./CourseListContainer";
import CourseEditor from "./CourseEditor"
import {BrowserRouter, Route} from "react-router-dom"
import CourseGridComponent from "./CourseGridComponent";
import CourseTableComponent from "./CourseTableComponent";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import CourseCardComponent from "./CourseCardComponent";

class WhiteBoard extends React.Component{
    render() {
        return(
            <BrowserRouter>
            <div>
                <h1>Course Manager</h1>

                {/*To Do: routes to registration, profile components*/}

                <Route
                    path = "/login"
                    exact = {true}
                    component = {LoginComponent}
                />

                <Route
                    path = '/'
                    exact = {true}
                    component = {HomeComponent}
                    />
                <Route
                    path = '/courses'
                    exact = {true}
                    component = {CourseListContainer}/>

                <Route
                    path = '/:layout/courses'
                    exact = {true}
                    component = {CourseListContainer}/>


                <Route
                    path = '/editor'
                    exact = {true}
                    component = {CourseEditor}/>


            </div>
            </BrowserRouter>
        )
    }
}

export default WhiteBoard