const guessedLetter = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector("span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again")

//for testing
const word = "magnolia";
    
const update = function () {
    const letters = word.split("");
    const letterCount = [];
    for (const key in letters) {
        letterCount.push("●")
    }
    const totalLetters = letterCount.join("");
    //console.log(totalLetters)
    wordInProgress.innerHTML = totalLetters;
    //for length of letterCount,letters.push("●");
}

update(word)

guess.addEventListener("click", function (e) {
    e.preventDefault();
    //Create and name a variable to capture the value of the input. 
    const capture = letter.value;
    //Log out the value of the variable capturing the input. Then, empty the value of the input. 
    console.log(capture);
    letter.value = "";
    //You should see the letter you enter into the input field in the console when the Guess button is clicked. 
})