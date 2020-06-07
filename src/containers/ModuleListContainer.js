import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules,
        newModuleTitle: state.newModuleTitle
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllModules: () => {
            ModuleService.findAllModules()
                .then(actualModules => console.log(actualModules))
        },
        createModule: (newModule) =>
        {
            dispatch({
                    type: "ADD_MODULE",
                    newModule: newModule
                }

            )
        }
        ,
        deleteModule: (moduleId) =>
        {
            dispatch({
                type: "DELETE_MODULE",
                moduleId: moduleId
            })
        }
    }
}

const ModuleListContainer = connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent)
export default ModuleListContainer
