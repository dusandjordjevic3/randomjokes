const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

async function getJoke(){
    try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Couldn't fetch the joke");
    } 
    const data = await response.json();
    console.log(data.joke);

    joke.textContent = data.joke;
    }
    catch(error){
        console.error(error);
    }
}



btn.addEventListener("click", function(event){
    getJoke();
})