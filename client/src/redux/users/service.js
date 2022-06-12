const { response } = require("../../../../server/app")

const getUsers = () => {
    const response = fetch(
        'localhost:3002/users',
        {
        method: 'GET',
        header: {
            'Content-Type': 'application.json'
        }
    })

return response.json();
}