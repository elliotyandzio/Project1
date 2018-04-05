$(function() {
  const indices = [ ];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const library  = ['banana', 'orange', 'apple', 'mango'];
  const randomWord = library[Math.floor(Math.random()*library.length)];
  console.log('chosenWord-->', randomWord);
  let found = false;
  let head = false;
  let body = false;
  let arms = false;
  let left = false;
  let right = false;
  let head1 = false;
  let body1 = false;
  let arms1 = false;
  let left1 = false;
  let right1 = false;
  let player2turn = false;
  let stand = false;
  let stand1 = false;
  let guess;
  let player1Score = 0;
  let player2Score = 0;
  const audioPing = new Audio('./sounds/ping.mp3');
  const audioBuzzer = new Audio('./sounds/buzzer.mp3');

  // adding players score
  // if indices.length === randomWord.length
  // compare the score in order to determinate the winner

  $('body').append('<div class="turn"></div>');
  const $turn = $('.turn');
  $turn.text('Player 1 turn');

$('#player1Score').text(player1Score);
$('#player2Score').text(player2Score);

  //creates amount of divs for the length of the word taken from the array
  for (let i = 0; i<randomWord.length; i++){
    $('.reel').append('<div class="wordLetters"></div>');
  }

  //Adds the values to the keyboard elements
  for (let k = 0; k<alphabet.length; k++){
    $('.keyboard').append('<div class="keys">' + alphabet[k] + '</div>');
  }



  $(document).keypress(function (e) {
    guess = String.fromCharCode(e.keyCode);
    if(e.keyCode >= 97 && e.keyCode <= 122){
      //loops each letter of the array and see's if the user input matches.
      for(let i=0; i<randomWord.length;i++) {
        if (randomWord[i] === guess){
          found = true;
          indices.push(guess);
          $(`.wordLetters:eq(${i})`).text(guess);
          audioPing.play();
          console.log(indices.length, randomWord.length);

          //add to to each player score
          if(player2turn === false){
            player1Score ++;
            $('#player1Score').text(player1Score);
          } else {
            player2Score++;
            $('#player2Score').text(player2Score);
          }

          if(indices.length === randomWord.length) {
            if (player1Score > player2Score){
              $('#player1Score').text('Wins!');
              $('#player2Score').text('Loses!');
            } else if (player1Score < player2Score) {
              $('#player1Score').text('Loses!');
              $('#player2Score').text('Wins!');
            } else {
              $('#player1Score').text('Draw!');
              $('#player2Score').text('Draw!');
            }
          }
        }
      }
      if(!found) {
        //for all incorrect guesses for player1 print a new part of the hangman
        audioBuzzer.play();
        if(player2turn === false) {
          console.log('player1 turn!');

          // checking and drawing the hangman
          if(stand === false) {
            $('.top, .rope, .stand, .floor').css('opacity', '1');
            stand = true;

            console.log('player2 turn!');
          } else if(stand === true && head === false) {
            $('.head').css('opacity', '1');
            head = true;

            console.log('player2 turn!');
          } else if (stand === true && body === false && head === true) {
            $('.torso').css('opacity', '1');
            body = true;

            console.log('player2 turn!');
          } else if(stand === true && arms === false && head === true && body === true) {
            $('.arms').css('opacity', '1');
            arms = true;

            console.log('player2 turn!');
          } else if (stand === true && left === false && head === true && body === true && arms === true){
            $('.left').css('opacity', '1');
            left = true;

            console.log('player2 turn!');
          } else if(stand === true && right === false && head === true && body === true && arms === true && left === true) {
            $('.right').css('opacity', '1');
            right = true;

            console.log('player2 turn!');
          } else {
            alert('You have run out of life .... GAME OVER - Player Two Wins!');
            console.log('gameover!!');
          }
          $turn.text('Player 2 turn');
          player2turn = true;
          console.log('after player2 has been changed to true--->', player2turn);
          // *******************************

          //print all the hangman elements for a incorrect guess for player 2.
        } else {
          if(stand1 === false) {
            $('.top1, .rope1, .stand1, .floor1').css('opacity', '1');
            stand1 = true;

          } else if(stand1 === true && head1 === false) {
            $('.head1').css('opacity', '1');
            head1 = true;

          } else if (stand1 === true && body1 === false && head1 === true) {
            $('.torso1').css('opacity', '1');
            body1 = true;

          } else if(stand1 === true && arms1 === false && head1 === true && body1 === true) {
            $('.arms1').css('opacity', '1');
            arms1 = true;

          } else if (stand1 === true &&  left1 === false && head1 === true && body1 === true && arms1 === true){
            $('.left1').css('opacity', '1');
            left1 = true;

          } else if(stand1 === true && right1 === false && head1 === true && body1 === true && arms1 === true && left1 === true) {
            $('.right1').css('opacity', '1');
            right1 = true;

          } else {
            alert('You have run out of life .... GAME OVER - Player One Wins!');
          }
          $turn.text('Player 1 turn');
          player2turn = false;
          console.log('after player2 has been changed to false--->', player2turn);
        }
      }
      found = false;
    }
  });
});
