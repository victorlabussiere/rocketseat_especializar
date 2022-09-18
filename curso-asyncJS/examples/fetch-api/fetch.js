const url = "https://api.github.com/users/victorlabussiere"
const body = document.querySelector('body')
console.log(body)

// fetch is an browser method, it wont work inside nodejs...
var response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        body.textContent += `The request response is ${data.name}`
        console.log(data)
    })