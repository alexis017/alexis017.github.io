function myMove() 
{
  var elemDog1 = document.getElementById("Dog1");
  var elemDog1Win = document.getElementById("Dog1win");
  var elemDog2 = document.getElementById("Dog2");
  var elemDog2Win = document.getElementById("Dog2win");
  
  
  var posDog1 = 0;
  var posDog2 = 0;

  var hasWinner = false;
  elemDog1Win.style.display = 'none';
  elemDog2Win.style.display = 'none';
  
  
  
  var id = setInterval(frame, 5);
  function frame()
  {
    if(posDog1 >=600 && posDog2 >= 600)
    {
      clearInterval(id);
      return;
    }

    if(posDog1 < 600)
    {
      posDog1 += Math.round(Math.random()*10);
      if(posDog1 >= 600)
      {
        posDog1 = 600;
        if(!hasWinner){
          hasWinner = true;
          elemDog1Win.style.display = 'unset';
          document.getElementById('Light').src="red-stop-light-hi.png";
          }
      }
      elemDog1.style.left = posDog1 + 'px';
    }

    if(posDog2 < 600)
    {
      posDog2 += Math.round(Math.random()*10);
      if(posDog2 >= 600)
      {
        posDog2 = 600;
        if(!hasWinner){
          hasWinner = true;
          elemDog2Win.style.display = 'unset';
          document.getElementById('Light').src="red-stop-light-hi.png";
        }
      }
      elemDog2.style.left = posDog2 + 'px';
    }
  }
}



