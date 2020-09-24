<script>

    let firstValue = +prompt('Please enter the first value');
    let operator = prompt('enter now the operator');
    let secondValue = +prompt('eventually enter the second value');

        switch(operator){
            case '+':
                console.log(firstValue + secondValue);
                break;
            case '-':
                console.log(firstValue - secondValue);
                break;
            case '*':
                console.log(firstValue * secondValue);
                break;
            case '/':
                console.log(firstValue / secondValue);
                break;
            default:
                console.log('Invalid operator');
        }
       
       const playerName = prompt("What is you're name?");
       const random = Math.floor(Math.random() * 100) + 1;

       guessNumber(random, playerName);

       function guessNumber(numberToGuess, playerName) {
            let playerNumber = +prompt('Give a number between 1 and 100');
            if (playerNumber > numberToGuess) {
            console.log('It is less');
            guessNumber(numberToGuess, playerName);
            }    
            else if (playerNumber < numberToGuess) {
            console.log('It is more');
            guessNumber(numberToGuess, playerName);
            }
            else if (playerNumber === numberToGuess) {
            console.log(playerName + ' wins');
            }
            else {
            console.log('This is not a number');
            guessNumber(numberToGuess, playerName);
            }
        }
        

   </script>