import { getJoke } from "./axios"
import "./style/index.scss"
const joke = document.getElementById("joke")
const jokeButton = document.getElementById("btnJoke")

addJoke()

jokeButton.onclick = async ()=>{
    addJoke()
}
async function addJoke() {

    joke.innerText = (await getJoke())?.data.joke
}