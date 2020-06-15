import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";
import TopicService from "../services/TopicService";
import topicReducer from "../reducers/topicReducer";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        topics: state.topicReducer.topics,
        newTopicTitle: topicReducer.newTopicTitle,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForModule: (moduleId) => {
            TopicService.findTopicsForModule(moduleId)
                .then(topicsForTheCourse => dispatch({
                    type: "FIND_TOPIC_FOR_MODULE",
                    topics: topicsForTheCourse
                }))
        },


        createTopic: (topicId, newTopic) =>
        {
            TopicService.createLesson(topicId, newTopic)
                .then(actualNewTopic => dispatch({
                    type: "CREATE_TOPIC",
                    newTopic: actualNewTopic
                }))
        },
        /* updateLesson: (moduleId, newModuleData) => {
             LessonService.updateModule(lessonId, newLessonData)
                 .then(status => dispatch({
                     type: 'UPDATE_LESSON',
                     updatedModule: newLessonData
                 }))
         },*/
        deleteTopic: (topicId) =>
        {
            TopicService.deleteTopic(topicId)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicId: topicId
                }))

        }
    }
}

const constTopicListContainer = connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillsComponent)
export default constTopicListContainer

