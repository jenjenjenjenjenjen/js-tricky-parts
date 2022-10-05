function guessingGame() {
    let answer = Math.floor(Math.random() * 99) + 1;
    let guessCount = 0;
    let found = false;
    return function makeGuess(guess) {
        guessCount++;
        if(found === false) {
            if(guess === answer) {
                found = true;
                return `You win! You found ${answer} in ${guessCount} guesses.`;
            }
            else if(guess > answer) return `${guess} is too high!`;
            else if(guess < answer) return `${guess} is too low!`;
        }
        else return `The game is over, you already won!`;
    }
}

module.exports = { guessingGame };
