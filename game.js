let realNum = 69;
let guessNum = prompt ("Guess the number (60-80):");

while (guessNum != realNum) {
    guessNum = prompt (" Ops, You entered a wrong number. Guess Again:");
}

alert("Congratulations, You entered the right number :)");