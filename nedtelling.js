


function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}




function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var philip = document.getElementById(id);
    var timer = updateTimer(deadline);

    philip.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';
	///////////////////////////////////////////////////  
	 if(timer.total < 1){
		clearInterval(timerInterval);
		philip.innerHTML = window.location.href = "heyy.html";
	 
	  
	  //ETTER NEDTELLING
    //if(timer.total < 1){
		//clearInterval(timerInterval);
		//philip.innerHTML = '<div> HEII </div>';
	  
	  //if(timer.total < 1){
      //clearInterval(timerInterval);
      //philip.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }


   

  }, 1000);
}

///////////////////////////////////////////////////////////
window.onload = function(){
  var deadline = new Date("November 11, 2016 21:00:00");
  startTimer("philip", deadline);
};

