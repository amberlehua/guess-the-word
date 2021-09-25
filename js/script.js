const guessTheLetter = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector("span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again")


//for testing
const word = "magnolia";
const guessedLetters = [];

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
 
    letter.value = "";
    message.innerText = "";
   // console.log(capture);
    //You should see the letter you enter into the input field in the console when the Guess button is clicked. 


    checkCheck = checkInput(capture);
   // console.log(checkCheck)
   
})

const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    //First, check if the input is empty. 
    if (!input) {
        message.innerText = "It's blank silly!"
    } else if (input.length > 1) {
        message.innerText = "Please only put one letter."
    } else if (!input.match(/[a-zA-Z]/)) {
        message.innerText = "Please enter a letter from A-Z."
    } else {
        makeGuess(input);
    };
};

const makeGuess = function (letter) {
    const uppercaseLetter = letter.toUpperCase();
    if (guessedLetters.includes(uppercaseLetter)) {
        message.innerText = "You already put that one! Please guess a different letter."
    } else {
        guessedLetters.push(uppercaseLetter)
    };
    //console.log(guessedLetters);
    updatePage();
    updateWord(guessedLetters);
};

const updatePage = function () {
    guessTheLetter.innerText = "";
    for (let guess in guessedLetters) {
        const li = document.createElement("li");
        li.innerText = guessedLetters[guess];
        guessTheLetter.append(li);
       
    };
};

const updateWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const newUpdate = []
    //console.log(wordArray);
    // Check if the wordArray contains any letters from the guessedLetters array. 
    for (let letter in wordArray) {
        if (guessedLetters.includes(wordArray[letter])) {
            newUpdate.push(wordArray[letter])
        } else {
            newUpdate.push("●")
        };
    };
        //replace circle with that letter
    //}
    // If it does contain any of the letters, update the circle symbol with the correct letter. 
    // Hint: You’ll want to create a new array with the updated characters and then use join()
    //      to update the empty paragraph where the word in progress will appear.
   
    
    wordInProgress.innerHTML = newUpdate.join("")
    gameWin();
};

const gameWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        //(word.toUpperCase() === wordInProgress.innerText)
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};