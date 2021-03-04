
var task;
var retangleNumber = 0;
var rewrite;
var newtask;
var positionx, positiony;
var numeroSorteado;


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
draggie.on( 'dragEnd', function(){
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
      numeroSorteado = Math.floor(Math.random() * 10) + 1;
      completed(numeroSorteado); }
    else  if (positiony >= (29/100)*window.screen.availHeight && positiony <= (55/100)*window.screen.availHeight){
      document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
        numeroSorteado = Math.floor(Math.random() * 10) + 1;
        delayed(numeroSorteado);
      }
    else  if (positiony >= (58/100)*window.screen.availHeight && positiony <= (85/100)*window.screen.availHeight){
      document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
      numeroSorteado = Math.floor(Math.random() * 10) + 1;
      noncompleted(numeroSorteado);
      }
  }
  break;

case 2:
    if (positionx >= (40/100)*window.screen.availWidth) {

      if (positiony >= (-18/100)*window.screen.availHeight && positiony <= (8/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
       numeroSorteado = Math.floor(Math.random() * 10) + 1;
        completed(numeroSorteado);  }
      else  if (positiony >= (10/100)*window.screen.availHeight && positiony <= (36/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
        numeroSorteado = Math.floor(Math.random() * 10) + 1;
          delayed(numeroSorteado);
        }
      else  if (positiony >= (38/100)*window.screen.availHeight && positiony <= (64/100)*window.screen.availHeight){
        document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
        numeroSorteado = Math.floor(Math.random() * 10) + 1;
          noncompleted(numeroSorteado);
        }
    }
    break;

case 3:
      if (positionx >= (40/100)*window.screen.availWidth) {
        if (positiony >= (-24/100)*window.screen.availHeight && positiony <= (2/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          numeroSorteado = Math.floor(Math.random() * 10) + 1;
          completed(numeroSorteado);  }
        else  if (positiony >= (4/100)*window.screen.availHeight && positiony <= (30/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          numeroSorteado = Math.floor(Math.random() * 10) + 1;
          delayed(numeroSorteado);
          }
        else  if (positiony >= (32/100)*window.screen.availHeight && positiony <= (58/100)*window.screen.availHeight){
          document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
          numeroSorteado = Math.floor(Math.random() * 10) + 1;
          noncompleted(numeroSorteado);
          }
      }
      break;

case 4:
            if (positionx >= (40/100)*window.screen.availWidth) {
              if (positiony >= (-32/100)*window.screen.availHeight && positiony <= (-6/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                completed(numeroSorteado);  }
              else  if (positiony >= (-4/100)*window.screen.availHeight && positiony <= (22/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                delayed(numeroSorteado);
                }
              else  if (positiony >= (24/100)*window.screen.availHeight && positiony <= (51/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                noncompleted(numeroSorteado);
              }
            }
            break;
case 5:
            if (positionx >= (40/100)*window.screen.availWidth) {
              if (positiony >= (-40/100)*window.screen.availHeight && positiony <= (-12/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                completed(numeroSorteado);  }
              else  if (positiony >= (-10/100)*window.screen.availHeight && positiony <= (17/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                delayed(numeroSorteado);
                }
              else  if (positiony >= (19/100)*window.screen.availHeight && positiony <= (46/100)*window.screen.availHeight){
                document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                numeroSorteado = Math.floor(Math.random() * 10) + 1;
                noncompleted(numeroSorteado);
                }
                  }
                  break;
case 6:
              if (positionx >= (40/100)*window.screen.availWidth) {
                if (positiony >= (-48/100)*window.screen.availHeight && positiony <= (-22/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  numeroSorteado = Math.floor(Math.random() * 10) + 1;
                  completed(numeroSorteado);  }
                else  if (positiony >= (-20/100)*window.screen.availHeight && positiony <= (6/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  numeroSorteado = Math.floor(Math.random() * 10) + 1;
                  delayed(numeroSorteado);
                  }
                else  if (positiony >= (8/100)*window.screen.availHeight && positiony <= (34/100)*window.screen.availHeight){
                  document.getElementById('retangle' + number).style.marginLeft= 99999 + 'px';
                  numeroSorteado = Math.floor(Math.random() * 10) + 1;
                  noncompleted(numeroSorteado);
                  }
                        }
                        break;

}

}

function mailalert(){
  alert('My Email: ebert5245@gmail.com');
}



function completed(numeroSorteado){
switch(numeroSorteado){

case 1:
window.alert('It does not matter how slowly you go as long as you do not stop. - Confucius﻿');
break;

case 2:
window.alert('It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things. - Leonardo da Vinci﻿');
break;

case 3:
window.alert('The way to get started is to quit talking and begin doing. - Walt Disney');
break;

case 4:
window.alert('The future depends on what you do today. - Mahatma Gandhi');
break;

case 5:
window.alert('Whatever you are, be a good one. - Abraham Lincoln');
break;

case 6:
window.alert('Often when you think you’re at the end of something, you’re at the beginning of something else. - Fred Rogers');
break;

case 7:
window.alert('The fruit of your own hard work is the sweetest. - Deepika Padukone');
break;

case 8:
window.alert('The biggest reward for a thing well done is to have done it. - Voltaire');
break;

case 9:
window.alert('Before you act, listen. Before you react, think. Before you spend, earn. Before you criticize, wait. Before you quit, try. - William Arthur Ward');
break;

case 10:
window.alert('A dream becomes a goal when action is taken toward its achievement. - Bo Bennett﻿');
break;


}}

function delayed(numeroSorteado){

  switch(numeroSorteado){


    case 1:
    window.alert('Delay is preferable to error. - Thomas Jefferson');
    break;

    case 2:
    window.alert('Never do today what you can put off till tomorrow. Delay may give clearer light as to what is best to be done. - Aaron Burr');
    break;

    case 3:
    window.alert('Patience is bitter, but its fruit is sweet - Aristotle');
    break;

    case 4:
    window.alert('The greatest remedy for anger is delay. - Seneca');
    break;

    case 5:
    window.alert('One day\'s delay is another day\'s lack of progress. - Stuart Bowen');
    break;

    case 6:
    window.alert('You may delay, but time will not, and lost time is never found again. - Benjamin Franklin');
    break;

    case 7:
    window.alert('Delay is the deadliest form of denial. - C. Northcote Parkinson');
    break;

    case 8:
    window.alert('Change your life today. Don\'t gamble on the future, act now, without delay. - Simone de Beauvoir');
    break;

    case 9:
    window.alert('Delay always breeds danger. - Miguel de Cervantes');
    break;

    case 10:
    window.alert('Forewarned, forearmed; to be prepared is half the victory. - Miguel de Cervantes');
    break;

}

}

function noncompleted(numeroSorteado){

  switch(numeroSorteado){

    case 1:
    window.alert('If you can\'t fly then run, if you can\'t run then walk, if you can\'t walk then crawl, but whatever you do, you have to keep moving forward. - Martin Luther King Jr.');
    break;

    case 2:
    window.alert('Where there is no struggle, there is no strength. - Oprah Winfrey');
    break;

    case 3:
    window.alert('What does not kill me makes me stronger - Friedrich Nietzsche');
    break;

    case 4:
    window.alert('Although the world is full of suffering, it is also full of the overcoming of it. - Helen Keller');
    break;

    case 5:
    window.alert('It\'s not whether you get knocked down; it\'s whether you get up. - Vince Lombardi');
    break;

    case 6:
    window.alert('I don\'t like to lose — at anything — yet I\'ve grown most not from victories, but setbacks. - Serena Williams');
    break;

    case 7:
    window.alert('Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place. - Lance Armstrong');
    break;

    case 8:
    window.alert('Yesterday is not ours to recover, but tomorrow is ours to win or lose. - Lyndon B. Johnson');
    break;

    case 9:
    window.alert('Blessed are those who mourn, for they shall be comforted. - Matthew 5:4');
    break;

    case 10:
    window.alert('Just because you fail once doesn\'t mean you\'re gonna fail at everything. - Marilyn Monroe');
    break;

}
}
