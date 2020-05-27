import React from "react"


const ModuleListComponent = () =>
    <div>
        <h3>Module List</h3>
        <ul className="list-group wbdv-module-list">

            <li className="list-group-item  module-x ">
                <button
                    className="btn btn-white"> Module 1

                </button>
                <button
                    className="btn btn-white float-right wbdv-module-item-delete-btn"
                    type="submit">
                    X
                </button>
            </li>
            <li className="list-group-item  module-x ">
                <button
                    className="btn btn-white"> Module 2

                </button>
                <button
                    className="btn btn-white float-right"
                    type="submit">
                    X
                </button>
            </li>

            <li className="list-group-item active module-x ">
                <button
                    className="btn btn-white"> Module
                  3
                </button>
                <button
                    className="btn btn-white float-right wbdv-module-item-delete-btn"
                    type="submit">
                    X
                </button>
            </li>
            <li className="list-group-item  module-x ">
                <button
                    className="btn btn-white"> Module
                 4
                </button>
                <button
                    className="btn btn-white float-right wbdv-module-item-delete-btn"
                    type="submit">
                    X
                </button>
            </li>
            <li className="list-group-item module-x ">
                <button
                    className="btn btn-white"> Module
                 5
                </button>
                <button
                    className="btn btn-white float-right wbdv-module-item-delete-btn"
                    type="submit">
                    X
                </button>
            </li>

        </ul>
    </div>

export default ModuleListComponent