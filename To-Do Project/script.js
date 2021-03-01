
var task;
var retangleNumber = 0;
var rewrite;
var newtask;

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


function doubleclick(rewrite){

var newtask = prompt("Digite a sua task: (maximum of 60 characters)");

if(newtask.length<60 && newtask.length>20){
document.getElementById('retangle' + rewrite).style.height =  1 + Math.round(newtask.length/20) + 'rem';
document.getElementById('retangle' + rewrite).textContent = ' ' + newtask ;}

else if(task.length<20 && task.length>0){

    document.getElementById('retangle' + retangleNumber).style.height =   2 +'rem';
    document.getElementById('retangle' + retangleNumber).textContent = ' ' + task;

}}


document.getElementById("retangle1").addEventListener("dblclick", doubleclick(rewrite=1));
document.getElementById("retangle2").addEventListener("dblclick", doubleclick(rewrite=2));
document.getElementById("retangle3").addEventListener("dblclick", doubleclick(rewrite=3));
document.getElementById("retangle1").addEventListener("dblclick", doubleclick(rewrite=4));



//todo: make the divs draggable
//todo: when you double click, it should open a write menu
