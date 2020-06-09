import React from "react"
import {Link} from "react-router-dom";

 class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: "some other module",
        editingModule: {}
    }

    componentDidMount() {
       this.props.findAllModules()
        //this.props.findModuleForCourse(this.props.params.courseId)


    }

render() {
         return (
             <div>
                 <h1>Modules ({this.props.modules.length})</h1>
                 {this.props.params.courseId}

                 <ul>
                     {
                         this.props.modules.map(module =>
                             <li key={module._id}>
                                 {
                                     this.state.editingModule._id === module._id &&
                                     <span>
                                        <button onClick={() => this.props.deleteModule(module._id)}>
                                     Delete
                                 </button>
                                 <button onClick = {() => {
                                     this.props.updateModule((this.state.editingModule._id, this.state.editingModule))
                                     this.setState({editingModule: {}})
                                 }}>
                                     Save
                                 </button>
                                         <input onChange = {(e) => {
                                             const newTitle = e.target.value
                                             this.setState(prevState => ({
                                                 editingModule: {
                                                     ...prevState.editingModule,
                                                     title: newTitle
                                                 }
                                             }))
                                         }}
                                                value = {this.state.editingModule.title}/>
                                     </span>
                                 }
                                 {
                                     this.state.editingModule._id !== module._id &&
                                     <span>
                                         {module.title}
                                         <button onClick = {() => this.setState({editingModule: module})}>
                                             Edit
                                         </button>

                                     </span>
                                 }

                             </li>
                         )
                     }
                 </ul>
                    <input onChange={(event) =>

                        this.setState({
                                newModuleTitle: event.target.value
                            })}

                           value={this.state.newModuleTitle}/>
                 <button onClick={() => this.props.createModule(
                     {title: this.state.newModuleTitle,
                     _id: (new Date()).getMilliseconds() + ""})}>
                     Add
                 </button>

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
