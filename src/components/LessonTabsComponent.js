import React from "react"

const LessonTabsComponent = () =>
    <div>
        <h3>Lessons</h3>

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link lessons wbdv-lesson-tabs">Lesson 1</a>
            </li>
            <li className="nav-item wbdv-page-tab">
                <a className="nav-link active wbdv-lesson-tabs">Lesson 2</a></li>
            <li className="nav-item">
                <a className="nav-link wbdv-lesson-tabs">Lesson 3</a></li>
            <li className="nav-item">
                <a className="nav-link wbdv-lesson-tabs">Lesson 4</a></li>
            <li className="nav-item wbdv-lesson-tabs">
                <a className="nav-link wbdv-lesson-tabs">Lesson 5</a></li>
            <li className="nav-item">
                <a className="nav-link wbdv-lesson-tabs">Lesson 6</a>
            </li>


        </ul>

    </div>

export default LessonTabsComponent