const findAllModules = () => {
    return fetch("https:wbdv-generic-server.herokuapp.com/api/anuk1998/modules")
        .then(response => response.json())
}

export default {
    findAllModules
}