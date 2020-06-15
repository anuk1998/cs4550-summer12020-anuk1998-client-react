import {connect} from "react-redux";
import LessonTabs from "../components/LessonTabs";
import LessonService from "../services/LessonService";
import lessonReducer from "../reducers/lessonReducer";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons,
        newLessonTitle: lessonReducer.newLessonTitle,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            LessonService.findLessonsForModule(moduleId)
                .then(lessonsForTheCourse => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    modules: lessonsForTheCourse
                }))
        },


        createLesson: (lessonId, newLesson) =>
        {
            LessonService.createLesson(lessonId, newLesson)
                .then(actualNewLesson => dispatch({
                    type: "CREATE_LESSON",
                    newModule: actualNewLesson
                }))
        },
       /* updateLesson: (moduleId, newModuleData) => {
            LessonService.updateModule(lessonId, newLessonData)
                .then(status => dispatch({
                    type: 'UPDATE_LESSON',
                    updatedModule: newLessonData
                }))
        },*/
        deleteLesson: (lessonId) =>
        {
            LessonService.deleteLesson(lessonId)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonId: lessonId
                }))

        }
    }
}

const constLessonListContainer = connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabs)
export default constLessonListContainer

