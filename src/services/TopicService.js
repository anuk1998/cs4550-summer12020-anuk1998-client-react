export const findTopicsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/anuk1998/modules/${moduleId}/topics`)
        .then(response => response.json())

export const createTopic = (topicId, newTopic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/anuk1998/modules/${topicId}/topics`, {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (topicId) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/anuk1998/modules/topics" + topicId, {
        method: 'DELETE'
    })
        .then(response => response.json())


