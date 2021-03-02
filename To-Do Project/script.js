
var task;
var retangleNumber = 0;
var rewrite;
var newtask;
var positionx, positiony;

alert(window.screen.availHeight );
alert(window.screen.availWidth);

function createTask(){
retangleNumber+=1;
var task = prompt("Digite a sua task: (maximum of 60 characters)");

if(task.length<60 && task.length>20){
document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';
document.getElementById('retangle' + retangleNumber).style.height =  1 + Math.round(task.length/20) + 'rem';
document.getElementById('retangle' + retangleNumber).textContent = ' ' + task ;}

else if(task.length<20 && task.length>0){
    document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
    document.getElementById('retangle' + retangleNumber).style.height =   2 +'rem';
    document.getElementById('retangle' + retangleNumber).textContent = ' ' + task
    document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';

}

else{
  alert('More than 60 characters');
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

//  alert("aaaaa");


var draggie = new Draggabilly('#retangle' + number, {});
//alert("aaaaa"); work
draggie.on( 'dragMove', function(){
//alert(this.position.x);
var positionx = this.position.x;
//alert(positionx);

var positiony = this.position.y;
marcos(positionx, positiony, 1)



})
//  console.log(this.position.x + ',' + this.position.y);

//  if (this.position.x >= (52/100)*window.screen.availWidth) {
//    if (this.position.y >= (1/100)*window.screen.availHeight && this.position.y <= (25/100)*window.screen.availHeight){
//      alert('Based! Completed!')
//    }
//  }

;



}
function marcos(positionx, positiony, number){
switch(number){
case 1:
  if (positionx >= (55/100)*window.screen.availWidth) {
    if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
      alert('Based! Completed!')  }
    else  if (positiony >= (29/100)*window.screen.availHeight && positiony <= (55/100)*window.screen.availHeight){
        alert('Based! Completed!')
      }
    else  if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
        alert('Based! Completed!')
      }
  }
  break;

case 2:
    if (positionx >= (55/100)*window.screen.availWidth) {
      if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
        alert('Based! Completed!')
      }
    }
    break;

case 3:
      if (positionx >= (55/100)*window.screen.availWidth) {
        if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
          alert('Based! Completed!')
        }
      }
      break;

case 4:
            if (positionx >= (55/100)*window.screen.availWidth) {
              if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
                alert('Based! Completed!')
              }
            }
            break;
case 5:
            if (positionx >= (55/100)*window.screen.availWidth) {
              if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
                  alert('Based! Completed!')
                    }
                  }
                  break;
case 6:
              if (positionx >= (55/100)*window.screen.availWidth) {
                if (positiony >= (1/100)*window.screen.availHeight && positiony <= (25/100)*window.screen.availHeight){
                  alert('Based! Completed!')
                          }
                        }
                        break;

}

}



//console.log(this.position.x + ', ' + window.screen.availWidth);
//if(number = 1 && this.position.x > (38/100)*window.screen.availWidth) {
//  alert(x);





function completed(){
//todo: show a message
}
function delayed(){
//todo: show a message
}

function noncompleted(){
//todo: show a message
}



//todo: make the divs draggable
//todo: add good quotes when the user drops the div on the coloured square
