
var task;
var retangleNumber = 0;
var rewrite;
var newtask;
var positionx, positiony;


alert('It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things. - Leonardo da Vinci﻿');


function createTask(){
if(retangleNumber == 6){
  alert("Reached maximum capacity");
}
else{
retangleNumber+=1;
var task = prompt("Digite a sua task: (maximum of 60 characters)");
if(task.length<60 && task.length>20){
document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
document.getElementById('retangle' + retangleNumber).style.opacity = 1.0;
document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';
document.getElementById('retangle' + retangleNumber).style.height =  1 + Math.round(task.length/20) + 'rem';
document.getElementById('retangle' + retangleNumber).textContent = ' ' + task ;}

else if(task.length<20 && task.length>0){
    document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
    document.getElementById('retangle' + retangleNumber).style.opacity = 1.0;
    document.getElementById('retangle' + retangleNumber).style.height =   2 +'rem';
    document.getElementById('retangle' + retangleNumber).textContent = ' ' + task
    document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';

}

else{
  alert('More than 60 characters');
}
}
}




function doubleClick(retangle){



var newtask = window.prompt("Digite a sua task: (maximum of 60 characters)", document.getElementById('retangle' + retangle).textContent);
;

if(newtask.length<60 && newtask.length>20){

document.getElementById('retangle' + retangle).style.height =  1 + Math.round(newtask.length/20) + 'rem';
document.getElementById('retangle' + retangle).textContent = ' ' + newtask ;}

else if(newtask.length<20 && newtask.length>0){

    document.getElementById('retangle' + retangle).style.height =   2 +'rem';
    document.getElementById('retangle' + retangle).textContent = ' ' + newtask;

}}

function drag(number){


var draggie = new Draggabilly('#retangle' + number, {});
draggie.on( 'dragMove', function(){
var positionx = this.position.x;
var positiony = this.position.y;
marcos(positionx, positiony, number);

});



}
function marcos(positionx, positiony, number){
switch(number){
case 1:
  if (positionx >= (40/100)*window.screen.availWidth) {
    if (positiony >= (-3/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
      document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
      completed(); }
    else  if (positiony >= (29/100)*window.screen.availHeight && positiony <= (55/100)*window.screen.availHeight){
      document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
        delayed();
      }
    else  if (positiony >= (58/100)*window.screen.availHeight && positiony <= (85/100)*window.screen.availHeight){
      document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
      alert('cringe');
      noncompleted();
      }
  }
  break;

case 2:
    if (positionx >= (40/100)*window.screen.availWidth) {

      if (positiony >= (-18/100)*window.screen.availHeight && positiony <= (14/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
        completed();  }
      else  if (positiony >= (20/100)*window.screen.availHeight && positiony <= (46/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          delayed();
        }
      else  if (positiony >= (48/100)*window.screen.availHeight && positiony <= (74/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          noncompleted();
        }
    }
    break;

case 3:
      if (positionx >= (40/100)*window.screen.availWidth) {
        if (positiony >= (-18/100)*window.screen.availHeight && positiony <= (8/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          completed();  }
        else  if (positiony >= (10/100)*window.screen.availHeight && positiony <= (36/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          delayed();
          }
        else  if (positiony >= (38/100)*window.screen.availHeight && positiony <= (64/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          noncompleted();
          }
      }
      break;

case 4:
            if (positionx >= (40/100)*window.screen.availWidth) {
              if (positiony >= (-22/100)*window.screen.availHeight && positiony <= (4/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                completed();  }
              else  if (positiony >= (6/100)*window.screen.availHeight && positiony <= (32/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                delayed();
                }
              else  if (positiony >= (34/100)*window.screen.availHeight && positiony <= (60/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                noncompleted();
              }
            }
            break;
case 5:
            if (positionx >= (40/100)*window.screen.availWidth) {
              if (positiony >= (-30/100)*window.screen.availHeight && positiony <= (-4/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                completed();  }
              else  if (positiony >= (-2/100)*window.screen.availHeight && positiony <= (24/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                delayed();
                }
              else  if (positiony >= (26/100)*window.screen.availHeight && positiony <= (52/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                noncompleted();
                }
                  }
                  break;
case 6:
              if (positionx >= (40/100)*window.screen.availWidth) {
                if (positiony >= (-38/100)*window.screen.availHeight && positiony <= (-12/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  completed();  }
                else  if (positiony >= (-10/100)*window.screen.availHeight && positiony <= (16/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  delayed();
                  }
                else  if (positiony >= (17/100)*window.screen.availHeight && positiony <= (43/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  noncompleted();
                  }
                        }
                        break;

}

}

function mailalert(){
  alert('My Email: ebert5245@gmail.com');
}
function chamanozap(){
  alert('Call me or send a message on Whatsapp: +5537988516327');
}





function completed(){



switch(Math.floor(Math.random() * 10) + 1){

case 1:
windows.alert('It does not matter how slowly you go as long as you do not stop. - Confucius﻿');
break;

case 2:
alert('It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things. - Leonardo da Vinci﻿');
break;

case 3:
alert('The way to get started is to quit talking and begin doing. - Walt Disney');
break;

case 4:
alert('The future depends on what you do today. - Mahatma Gandhi');
break;

case 5:
alert('Whatever you are, be a good one. - Abraham Lincoln');
break;

case 6:
alert('Often when you think you’re at the end of something, you’re at the beginning of something else. - Fred Rogers');
break;

case 7:
alert('The fruit of your own hard work is the sweetest. - Deepika Padukone');
break;

case 8:
alert('The biggest reward for a thing well done is to have done it. - Voltaire');
break;

case 9:
alert('Before you act, listen. Before you react, think. Before you spend, earn. Before you criticize, wait. Before you quit, try. - William Arthur Ward');
break;

case 10:
alert('A dream becomes a goal when action is taken toward its achievement. - Bo Bennett﻿');
break;

}}
function delayed(){
  var frase = Math.floor(Math.random() * 10) + 1;

  switch(frase){


    case 1:
    alert('gooood');
    break;

    case 2:
    alert('gooood');
    break;

    case 3:
    alert('gooood');
    break;

    case 4:
    alert('gooood');
    break;

    case 5:
    alert('gooood');
    break;

    case 6:
    alert('gooood');
    break;

    case 7:
    alert('gooood');
    break;

    case 8:
    alert('gooood');
    break;

    case 9:
    alert('gooood');
    break;

    case 10:
    alert('gooood');
    break;

}

}

function noncompleted(){
  var frase = Math.floor(Math.random() * 10) + 1;

  switch(frase){

    case 1:
    alert('gooood');
    break;

    case 2:
    alert('gooood');
    break;

    case 3:
    alert('gooood');
    break;

    case 4:
    alert('gooood');
    break;

    case 5:
    alert('gooood');
    break;

    case 6:
    alert('gooood');
    break;

    case 7:
    alert('gooood');
    break;

    case 8:
    alert('gooood');
    break;

    case 9:
    alert('gooood');
    break;

    case 10:
    alert('gooood');
    break;

}
}


//todo: dont let the divs get out from the page
//todo: make the divs draggable
//todo: add good quotes when the user drops the div on the coloured square
//todo: (maybe) make a system better than onclick :)
