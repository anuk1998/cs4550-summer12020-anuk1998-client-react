import React from "react"



 class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: "some other module"
    }

    componentDidMount() {
        this.props.findAllModules()
    }

render() {
         return (
             <div>
                 <h1>Modules ({this.props.modules.length})</h1>

                 <ul>
                     {
                         this.props.modules.map(module =>
                             <li key = {module._id}>
                                 {module.title}
                                 <button onClick = {() => this.props.deleteModule(module._id)}>Delete</button>
                             </li>
                         )
                     }
                 </ul>
                 <input onChange = {(event) => this.setState({
                     newModuleTitle: event.target.value
                     }

                 )}
                        value = {this.state.newModuleTitle} />
                 <button onClick = {() => this.props.createModule({
                     title: this.state.newModuleTitle ,
                     _id: (new Date()).getMilliseconds() + ""
                 })}>Add</button>
             </div>
         )
     }
 }


export default ModuleListComponent





/*
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

export default ModuleListComponent*/
