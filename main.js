
function main() {
  var feedBtn = document.querySelector('.feed');
  var playBtn = document.querySelector('.play');
  var sleepBtn = document.querySelector('.sleep');
  var percentVariable = document.querySelector('.percent');
  var hungerPercentVariable = document.querySelector('.hunger-percent');
  var sleepPercentVariable = document.querySelector('.sleep-percent');
  var playPercentVariable = document.querySelector('.play-percent');
  var ball = document.querySelector('.ball');



  var buttons = document.querySelectorAll('.btn')
  var information = document.querySelectorAll('.info')


  var message = document.querySelector('.message');
  var message2 = document.querySelector('.message2');
  var overall = [];
  var healthStatus = 0;
  
  setTimeout(function(){
    overall[0] = Math.floor(Math.random() * 31) + 50;
    overall[1] = Math.floor(Math.random() * 31) + 50;
    overall[2] = Math.floor(Math.random() * 31) + 50;
    
  updateHealth(overall);
  changeMood()

      },2000)

    var intervalId = setInterval(function(){
    overall[0] = overall[0] - 10;
    overall[1] = overall[1] - 10;
    overall[2] = overall[2] - 10;
    updateHealth(overall);
    changeMood()

    }, 10000)

  
  function changeMood(healthStatus) {
    if(healthStatus < 30){
      ball.classList.remove('happy')
      ball.classList.remove('meh')
      ball.classList.add('sad')
    } else if (healthStatus < 50){
      ball.classList.remove('sad')
      ball.classList.remove('happy')
      ball.classList.add('meh')
    } else if (healthStatus > 60) {
      ball.classList.remove('meh')
      ball.classList.remove('sad')
      ball.classList.add('happy')
    }
  }
  
  var updateHealth = function(overall) {
    console.log(overall);
    
    sum = 0;
    for (i = 0; i<overall.length;i++) {
      sum = sum + overall[i];
    }
    sum = sum/overall.length;
    console.log(sum);
    var healthStatus = Math.floor(sum);
    if (healthStatus > 100) {
      healthStatus = 100;
    }
    if (healthStatus < 0) {
      healthStatus = 0;
    }
    percentVariable.innerText = healthStatus;
    hungerPercentVariable.innerText = overall[0];
    playPercentVariable.innerText = overall[1];
    sleepPercentVariable.innerText = overall[2];



      if (healthStatus <= 0) {
      message.innerText = 'Well, you just killed Paquito.';
      message2.classList.add('hidden');
      clearInterval(intervalId);
      buttons.forEach(function(node){
        node.classList.add('hidden');
        ball.classList.add('hidden')
      })
      information.forEach(function(node){
        node.classList.add('hidden');
      })

    } else if (healthStatus < 30) {
      message.innerText = 'Seriously, carallo!!'

    } else if (healthStatus < 50) {
      message.innerText = 'Paquito is not feeling well...'
    } else if (healthStatus > 60) {
      message.innerText = 'Paquito is feeling good. For now.'
    } 

    if (overall[0] < 0) {
      message2.innerText = "Paquito is a bit hungry, why don't you feed him?"
    } else if (overall[0] > 100) {
      message2.innerText = "Paquito is getting fat, make him run or something."
    } else if (overall[1] < 0) {
      message2.innerText = "Paquito is about to die of boredom..."
    } else if (overall[2] > 100) {
      message2.innerText = "Paquito is hyperactive now!!"
    }
    changeMood(healthStatus);
  }
  
var clickFeed = function(event) {
  overall[0] = overall[0] + 10;
  overall[2] = overall[2] - 5;
  updateHealth(overall);
  changeMood()
}

var clickPlay = function(event) {
  overall[1] = overall[1] + 10;
  
  overall[0] = overall[0] - 10;
   
  overall[2] = overall[2] - 20;
   
  updateHealth(overall);
  changeMood()
}

var clickSleep = function(event) {
  overall[0] = overall[0] - 20;
   
  overall[2] = overall[2] + 30;
   
  overall[1] = overall[1] - 5;
   
  updateHealth(overall);
  changeMood()
}

feedBtn.addEventListener('click', clickFeed);
playBtn.addEventListener('click', clickPlay);
sleepBtn.addEventListener('click', clickSleep);
    
}
window.addEventListener('load',main);