
var task;
var retangleNumber = 0;


function task(){
retangleNumber+=1;
var task = prompt("Digite a sua task: (maximum of 36 characters)");

if(task.length<36 && task.length>12){
document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';
document.getElementById('retangle' + retangleNumber).style.height =  1 + Math.round(task.length/12) + 'rem';
document.getElementById('retangle' + retangleNumber).textContent = ' ' + task ;}

else if(task.length<12 && task.length>0){
    document.getElementById('retangle' + retangleNumber).style.backgroundColor = 'white';
    document.getElementById('retangle' + retangleNumber).style.height =   2 +'rem';
    document.getElementById('retangle' + retangleNumber).textContent = ' ' + task
    document.getElementById('retangle' + retangleNumber).style.border = '2px solid grey';

}

else{
  alert('More than 36 characters')
}
}


//todo: make the divs draggable
