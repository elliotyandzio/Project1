$(function() {
  const indices = [ ];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const library  = ['banana', 'orange', 'apple', 'mango'];
  const randomWord = library[Math.floor(Math.random()*library.length)];
  console.log('chosenWord-->', randomWord);
  let found = false;
  const $showHide = $('.showHide');
  let head = false;
  let body = false;
  let arms = false;
  let left = false;
  let right = false;


  //creates amount of divs for the length of the word taken from the array
  for (let i = 0; i<randomWord.length; i++){
    $('.reel').append('<div class="wordLetters"></div>');
  }

  for (let k = 0; k<alphabet.length; k++){
    $('.keyboard').append('<div class="keys">' + alphabet[k] + '</div>');
  }

  $showHide.click(function() {
    $('#head, #body, #arms, #left, #right').css('opacity', '1');
  });




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
        console.log('This letter isnt in the word');
        if(head === false) {
          $('#head').css('opacity', '1');
          head = true;
          console.log(body);
        } else if (body === false && head === true) {
          $('#body').css('opacity', '1');
          body = true;
          console.log(body);
        } else if(arms === false && head === true && body === true) {
          $('#arms').css('opacity', '1');
          arms = true;
        } else if (left === false && head === true && body === true && arms === true){
          $('#left').css('opacity', '1');
          left = true;
        } else if(right === false && head === true && body === true && arms === true && left === true) {
          $('#right').css('opacity', '1');
          right = true;
        } else {
          alert('You have run out of life .... GAME OVER');
        }
      }
    }
  });

});
