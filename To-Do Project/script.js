
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

//doubleclick callings
document.getElementById("retangle1").addEventListener("dblclick", function(){
  doubleclick(1, 1);
}, false);

document.getElementById("retangle2").addEventListener("dblclick", function1(){
  doubleclick(1, 2);
});

document.getElementById("retangle3").addEventListener("dblclick", function2(){
  doubleclick(1, 3);
});

document.getElementById("retangle4").addEventListener("dblclick", function3(){
  doubleclick(1, 4);
});

document.getElementById("retangle5").addEventListener("dblclick", function4(){
  doubleclick(5);
});

document.getElementById("retangle6").addEventListener("dblclick", function5(){
  doubleclick(6);
});


}



function doubleclick(rewrite, retangle){

var newtask = window.prompt("Digite a sua task: (maximum of 60 characters)", document.getElementById('retangle' + retangle).textContent);
;

if(newtask.length<60 && newtask.length>20){

document.getElementById('retangle' + retangle).style.height =  1 + Math.round(newtask.length/20) + 'rem';
document.getElementById('retangle' + retangle).textContent = ' ' + newtask ;}

else if(newtask.length<20 && newtask.length>0){

    document.getElementById('retangle' + retangle).style.height =   2 +'rem';
    document.getElementById('retangle' + retangle).textContent = ' ' + newtask;

}}




//todo: make the divs draggable
//todo: add good quotes when the user drops the div on the coloured square
