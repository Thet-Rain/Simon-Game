

//Listening for any key to press to start the game
$(document).on('keypress', startGame);

//When the key is press we call this function and the game is started
function startGame(event) {
  $('body').removeClass('game-over');
  var currentLevel = 1;
  $('h1').text('Level ' + currentLevel);
  $(document).off('keypress');

  //Creating two arrays to hold random generated colors and user clicked colors
  var gameColor = new Array();
  var buttonClicked = new Array();

  var i = 0; // for randomColor array;
  var j = 0; // for button click array to reset to 0
  var k = -1; //
  var arrayMatch = false;
  gameColor[i] = createRandomColor();
  setTimeout( function()
  {
  $('.'+gameColor[i]).addClass('pressed');
  var audioString = ('sounds/' + gameColor[i] + ".mp3");
  var audio = new Audio(audioString) ;
  audio.play();;
}, 500);
  setTimeout( function()
  {
  $('.'+gameColor[i]).removeClass('pressed');
}, 1000);




  $('.btn').on('click', function(event)
  {
     buttonClicked[j] = event.currentTarget.id;
     var tempStringForButtonClicked = buttonClicked[j]; // Needed this string because for somereason buttonClick[j] isn't being accepted as string in argument

    if ( k != i || j != k)
    {
      //Check for color match
      if (buttonClicked[j] == gameColor[j])
      {

        setTimeout( function()
        {
        $('.'+ tempStringForButtonClicked).addClass('pressed');
        var audioString2 = ('sounds/' + tempStringForButtonClicked + ".mp3");
        var audio2 = new Audio(audioString2) ;
        audio2.play();
        }, 100);
        setTimeout( function()
        {
        $('.'+tempStringForButtonClicked).removeClass('pressed');
        }, 500);
        k++;
        j++;
      }
      else if (buttonClicked[j] != gameColor[j])
      {
        $('h1').text('GAME OVER! Press AnyKey to startOver');
        $('.btn').off('click');
        $('body').addClass('game-over');
        var audio3 = new Audio('sounds/wrong.mp3') ;
        audio3.play();
        i = 0;
        j = 0;
        k = -1;
        $(document).on('keypress', startGame);
      }
    }


    if ( i == (j-1))
    {
      $('h1').html('Level ' + (i+2) );
      i++;
      j = 0;
      k = -1;
      gameColor[i] = createRandomColor();
      setTimeout( function()
      {
      $('.'+gameColor[i]).addClass('pressed');
      var audioString = ('sounds/' + gameColor[i] + ".mp3");
      var audio = new Audio(audioString) ;
      audio.play();;
    }, 2000);
      setTimeout( function()
      {
      $('.'+gameColor[i]).removeClass('pressed');
    }, 2500);
      buttonClicked = [];
    }
  });

}





//Function to create random color betwee 4 colors (green, red, yellow , blue)
function createRandomColor() {
  var randNumber = Math.floor(Math.random() * 4);

  switch (randNumber) {
    case 0:
      return 'green';
      break;
    case 1:
      return 'red';
      break;
    case 2:
      return 'yellow';
      break;
    case 3:
      return 'blue';
      break;
    default:

  }
}
