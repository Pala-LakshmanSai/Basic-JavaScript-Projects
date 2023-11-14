const getNewDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => document.querySelector("img").src = json.message) 
}
getNewDog()
document.querySelector("button").onclick = () => getNewDog()
