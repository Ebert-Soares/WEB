
var task;
var retangleNumber = 0;


function task(){
retangleNumber+=1;
var task = prompt("Digite a sua task: ");


document.getElementById('retangle' + retangleNumber).style.height =  + Math.round(task.length/12) + 'rem';
document.getElementById('retangle' + retangleNumber).textContent = task;

}

//todo: create the "turn white" system
//todo: make the getelement and change the text inside it
//todo: make the divs draggable
