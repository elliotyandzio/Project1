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


  //creates amount of divs for the length of the word taken from the array
  for (let i = 0; i<randomWord.length; i++){
    $('.reel').append('<div class="wordLetters"></div>');
  }

  for (let k = 0; k<alphabet.length; k++){
    $('.keyboard').append('<div class="keys">' + alphabet[k] + '</div>');
  }


  $(document).keypress(function (e) {
    if(e.keyCode >= 97 && e.keyCode <= 122){
      const guess = String.fromCharCode(e.keyCode);
      console.log('my letter-->', guess);
      for(let i=0; i<randomWord.length;i++) {
        if (randomWord[i] === guess){
          console.log('match-->',randomWord[i]);
          indices.push(guess);
          //console.log('indexOf guess--->', i);
          //console.log('indice--->',indices);
          $('.wordLetters:eq('+ i +')').text(guess);
          found = true;
        }
      } if(!found) {
        if(player2turn === false) {
          console.log('This letter isnt in the word');
          if(stand === false) {
            $('.top, .rope, .stand, .floor').css('opacity', '1');
            stand = true;
            player2turn = true;
          } else if(stand === true && head === false) {
            $('.head').css('opacity', '1');
            head = true;
            player2turn = true;
            console.log(body);
          } else if (stand === true && body === false && head === true) {
            $('.torso').css('opacity', '1');
            body = true;
            player2turn = true;
            console.log(body);
          } else if(stand === true && arms === false && head === true && body === true) {
            $('.arms').css('opacity', '1');
            arms = true;
            player2turn = true;
          } else if (stand === true && left === false && head === true && body === true && arms === true){
            $('.left').css('opacity', '1');
            left = true;
            player2turn = true;
          } else if(stand === true && right === false && head === true && body === true && arms === true && left === true) {
            $('.right').css('opacity', '1');
            right = true;
            player2turn = true;
          } else {
            alert('You have run out of life .... GAME OVER - Player Two Wins!');
          }
        } else {
          console.log('This letter isnt in the word');
          if(stand1 === false) {
            $('.top1, .rope1, .stand1, .floor1').css('opacity', '1');
            stand1 = true;
            player2turn = false;
          } else if(stand1 === true && head1 === false) {
            $('.head1').css('opacity', '1');
            head1 = true;
            player2turn = false;
            console.log(body);
          } else if (stand1 === true && body1 === false && head1 === true) {
            $('.torso1').css('opacity', '1');
            body1 = true;
            player2turn = false;
            console.log(body);
          } else if(stand1 === true && arms1 === false && head1 === true && body1 === true) {
            $('.arms1').css('opacity', '1');
            arms1 = true;
            player2turn = false;
          } else if (stand1 === true &&  left1 === false && head1 === true && body1 === true && arms1 === true){
            $('.left1').css('opacity', '1');
            left1 = true;
            player2turn = false;
          } else if(stand1 === true && right1 === false && head1 === true && body1 === true && arms1 === true && left1 === true) {
            $('.right1').css('opacity', '1');
            right1 = true;
            player2turn = false;
          } else {
            alert('You have run out of life .... GAME OVER - Player One Wins!');
          }
        }
      }
    }
  });

});
