$(function() {
  const $char = $('.box'); //get the class box(character)
  const $platform = $('.platform');//get the class platform(the platforms)
  console.log('platforms---->', typeof $platform);
  const top = []; //stores top value of platforms
  const left = []; //stores left value of platforms
  let moveUp = 2;
  let moveDown = 2;
  let moveLeft = 2;
  let moveRight = 2;
  let gravity = 2; // moves character value
  const charHeight = 20;
  let onPlatform = false;

  //Pushes the top and left values into their respective arrays.
  $.each($platform, function(i, platform) {
    platform = $(this);
    top.push(platform.offset().top); // gets the value from the top of the page of the platform and stores it to the top array
    left.push(platform.offset().left);
    console.log(platform, top, left);
  });

  setInterval(function(){
    const charOffset = $char.offset();
    const charleft  = charOffset.left;
    const chartop  = charOffset.top;
    const charright = charleft + $char.width();
    const charbottom = chartop + $char.height();
    // console.log("in interval");
    // const $platformOffset = $platform.offset();
    // console.log($platformOffset);

    if(300 - 11 - parseInt(chartop) > 0) {

      //$el.css('margin-top', '+=' + gravity + 'px');
      for(let i = 0; i<top.length; i++){
        console.log(
          i,
          charleft < left[i] + $platform.width(),
          charright > left[i],
          chartop < top[i] + $platform.height(),
          charbottom  ===  top[i]
        );
        if (charleft < left[i] + $platform.width() &&
        charright > left[i] &&
        chartop < top[i] + $platform.height() &&
        charbottom  ===  top[i]) {
          gravity = 0;
          $char.css('margin-top', '+=' + gravity + 'px');
          console.log('Collide');
          console.log(left[i], top[i]);
          //break ;
        } else {

          $char.css('margin-top', '+=' + gravity + 'px');
          //break;
        }
      }
    }
  }, 100);


  $(document).keydown(function(e) {
    if(e.keyCode === 38){
      gravity = 0;
    }
  });

  $(document).keyup(function(e) {
    if(e.keyCode === 38){
      gravity = 2;
    }
  });


  // movement of box
  //console.log($('.platform').offset());
  $(document).keydown(function(e) {
    onPlatform = false;
    //const leftBorder = 11;
    const code = e.keyCode;
    if(code === 37 && parseInt($char.offset().left) > 11){ // left
      $char.css('margin-left', '-=' + moveLeft + 'px');
    }else if(code === 39 && 400 - 11 - parseInt($char.offset().left) > 0 ){ // right && takes the width of the container - width of the .box(11 because already 9 indednt) - the amount of px it has move)
      $char.css('margin-left', '+=' + moveRight + 'px');
    }else if(code === 38 && parseInt($char.offset().top) > 11){ // top

      $char.css('margin-top', '-=' + moveUp + 'px');
    }else if(code === 40 && 300 - 11 - parseInt($char.offset().top) > 0){ // bottom
      $char.css('margin-top', '+=' + moveDown + 'px');
    }
  });
  //console.log(hits);
});
