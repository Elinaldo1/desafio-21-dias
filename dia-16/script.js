// const { default: axios } = require("axios")

const url = 'https://api.thecatapi.com/v1/images/search?size=full'

function getApi(){

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    })
    .then(res => { 
        res.json()
        .then(data => console.log(data))
    })
    .catch(err => console.log(err));
}