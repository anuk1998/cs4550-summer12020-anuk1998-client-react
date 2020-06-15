const initialState = {
    topics: [

    ]
}

const topicReducer = (state=initialState, action) => {
    switch(action.type) {
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case "FIND_TOPIC_FOR_MODULE":
            return {
                ...state,
                topics: action.actualTopics
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.newTopics]
            }
        default:
            return state
    }
}

export default topicReducer