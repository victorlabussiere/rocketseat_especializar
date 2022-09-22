const body = document.getElementById('renderApiResult')
const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let user = data.users[0].name
            body.textContent += user            
        })
        .then(error => console.error(error))
}

getUsers()