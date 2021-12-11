const fetcherForm = document.getElementById("fetcher-form");
const fetchInput = document.getElementById("fetchers-input")
const fetchBtn = document.getElementById("fetch-btn");
const personsList = [];
const beerFill = document.querySelector(".beer-fill");
const beerFoam = document.querySelector(".beer-foam");
const numOfBubbles = 200;
const result = document.querySelector(".result");
const resultTimer = 4000;
const theFetcher = document.querySelector(".the-fetcher");
const resetBtn = document.getElementById("reset-btn");

const createBubbles = () => {
    for(var i = 0; i < numOfBubbles; i++) {
        //Create bubble element
        const bubble = document.createElement("div");
        //Add the "beer-bubble" class to the element
        bubble.classList.add("beer-bubble");
        //Add the "top" and "left" styling based on random value of 90 as the max
        bubble.style.top = Math.floor(Math.random() * 99) + "%";
        bubble.style.left = Math.floor(Math.random() * 99) + "%";
        //Add the element to the div with the class of "beer-fill"
        beerFill.appendChild(bubble);
    }
}

const selectFetcher = (event) => {
    event.preventDefault();
    const beerBubble = Array.from(document.querySelectorAll(".beer-bubble"));
    const listOfPeople = fetchInput.value.split(",").map((name) => {
        let monkeh;
        name.trim()
        if(name === "Peter") {
            monkeh = "Abe";
            return monkeh;
        }
    });
    personsList.push(...listOfPeople);
    beerFill.classList.toggle("beer-fill-animate");
    beerFoam.classList.toggle("beer-foam-animate");
    beerBubble.forEach((element) => element.classList.toggle("bubble-animate"));
    selectRandom(personsList)
    resultSlide();
}

const resultSlide = () => {            
    setTimeout(() => {
        result.classList.toggle("result-animate");
    },resultTimer)
}

const selectRandom = (list) => {
    const randomNumber = Math.floor(Math.random() * list.length);
    const randomPerson = list[randomNumber];
    theFetcher.innerHTML = `${randomPerson} has to fetch beer`;
}

const resetFetch = () => {
    const allBubbles = document.querySelectorAll(".beer-bubble");
    result.classList.toggle("result-animate");
    beerFill.classList.toggle("beer-fill-animate");
    beerFoam.classList.toggle("beer-foam-animate");
    allBubbles.forEach((element) => element.classList.remove("bubble-animate"));
} 

const fetcher = fetchBtn.addEventListener("click", selectFetcher);
const reset = resetBtn.addEventListener("click", resetFetch);
createBubbles();