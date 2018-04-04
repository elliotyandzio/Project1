$(function() {
  const indices = [ ];
  const library  = ['banana', 'orange', 'apple', 'mango'];
  const randomWord = library[Math.floor(Math.random()*library.length)];
  console.log('chosenWord-->', randomWord);


  //creates amount of divs for the length of the word taken from the array
  for (var i = 0; i<randomWord.length; i++){
    $('body').append('<div class="wordLetters"></div>');
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
        }
      }
    }
  });
});
