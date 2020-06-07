
const hello = (state, action) => {
    if (action.type === 'HELLO') {
        return {message: action.data}
} else{
       return {message: 'hello 2'}
    }

    return {message: 'Hello World 456'}

}


export default hello