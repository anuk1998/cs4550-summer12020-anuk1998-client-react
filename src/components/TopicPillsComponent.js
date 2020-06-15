import React from "react"
import {connect} from "react-redux";
import {createTopic, findTopicsForModule} from "../services/TopicService";

class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.findTopicsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findTopicsForModule(this.props.params.moduleId)
        }
    }

    render() {
        return(
            <div>
                <h3>Topic Pills {this.props.params.moduleId}</h3>
                <ul>
                    {
                        this.props.topics.map(topic =>
                            <li key={topic._id}>
                                <button
                                    onClick={() => this.props.deleteTopic(topic._id)}>
                                    Delete
                                </button>
                                {topic.title}
                            </li>
                        )
                    }
                </ul>
                <button onClick={() => this.props.createTopic(
                    this.props.params.moduleId,
                    {
                        title: 'New Lesson'
                    })}>
                    Add
                </button>
            </div>
        )
    }
}

// export default LessonTabs

// TODO: move mappers, connectors to separate container file like we did for module

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (topicId, newTopic) => {
        createTopic(topicId, newTopic)
            .then(actualTopic => dispatch({
                type: 'CREATE_TOPIC',
                newTopic
            }))
    },
    findTopicsForModule: (moduleId) => {
        findTopicsForModule(moduleId)
            .then(actualTopics => dispatch({
                type: "FIND_TOPICS_FOR_MODULE",
                actualTopics
            }))
    },
    deleteTopic: (topicId) => {
        dispatch({
            type: "DELETE_TOPIC",
            topicId
        })
    }
})













export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(TopicPillsComponent)






    /*<div>
        <h4>Topics</h4>

        <ul class="nav nav-pills wbdv-topic-pill-list">
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link " href="#">
                    Topic 1</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link active" href="#">
                    Topic 2</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 3</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 4</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 5</a></li>


        </ul>
    </div>*/
