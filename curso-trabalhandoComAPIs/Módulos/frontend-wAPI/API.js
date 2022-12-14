const body = document.getElementById('renderApiResult')
const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.users))
        .then(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(err => console.error(err))

}

const newUser = {
    name: 'Victor Labussiere',
    avatar: 'https://avatars.githubusercontent.com/u/104212002?v=4',
    city: 'Nova Iguaçu'
}

function addUser(user) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data => {
            alertAPI.textContent = data
        })
        .catch(err => console.error(err))
}

function updtUser(user, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charser=UTF-8"
        }
    })
        .then(res => res.json())
        .then(dt => alertAPI.textContent = dt)
        .catch(err => console.error(err.message))
}

const upUser = {
    name: "Novo nome",
    avatar: "",
    city: "Nova cidade"
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(dt => alertAPI.textContent = dt)
        .catch(err => console.error(err.message))
}

console.log("functions: deleteUser(), addUser(), updtUser(), getUser() e getUsers()")