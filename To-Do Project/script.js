
var task;
var retangleNumber = 0;
var rewrite;
var newtask;

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



var draggie = new Draggabilly('#retangle' + number, {
});
draggie.on( 'dragMove', function(){
  console.log(this.position.x + ',' + this.position.y);
  //if(number = 1 && this.position.x > (38/100)*window.screen.availWidth) {
  //  alert(x);
  if (this.position.x >= (52/100)*window.screen.availWidth) {
    if (this.position.y >= (20/100)*window.screen.availHeight && this.position.y <= (44/100)*window.screen.availHeight)
  }
} );



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
