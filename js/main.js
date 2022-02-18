
let buttonNumbers = document.querySelectorAll('.numbers');
let buttonOperational = document.querySelectorAll('.operation');
let screen = document.querySelector('.screen');

let a = '';
let b = '';
let operation = '';
let result = 0;



for(let button of buttonNumbers){
  button.addEventListener('click', function(event){
      if(operation){
        b += event.target.textContent;
      } else {
      a += event.target.textContent;
      }

      show();
  })
}

for(let button of buttonOperational){
  button.addEventListener('click', function(event){
    operation = event.target.textContent;
  })
}

document.querySelector('.btn_delete').addEventListener('click', function(){
  clear();
  screen.textContent = '0';
});

document.querySelector('.btn_backspace').addEventListener('click', backSpace);
document.querySelector('.equal').addEventListener('click', function(){
  calc();
  a = result;
});




function clear(){
  a = '';
  b = '';
  operation = '';

}

function calc(){
  switch(operation){
    case '-': result = +a - +b;
    break;
    case '+': result = +a + +b;
    break;
    case '÷': result = +a / +b;
    break;
    case '×': result = +a * +b;
    break;
    default: screen.innerHTML = '0';
  }
  
  showResult();
}


function show(){
  if(operation){
    screen.textContent = b;
    if(b.length === 0){
      screen.textContent = '0';
    }
  } else {
    screen.textContent = a;
    if(a.length === 0){
      screen.textContent = '0';
    }
  }
  changeFontSize();
}


function showResult(){
  if(!Number.isFinite(result)){
    screen.textContent = 'Error';
    return;
  }
  screen.textContent = String(result);
  changeFontSize();
  clear();
}

function backSpace(){
  if(operation){
    b = b.slice(0, b.length-1);
    if(b.length === 0){
      b = '';
    }
  }else{
    a = a.slice(0,a.length-1);
    if(a.length === 0){
      a = '';
    }
  }
  show();
}
function changeFontSize(){
  switch(screen.textContent.length){
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        screen.style.fontSize = '96px';
        break;
      case 7:
      case 8:
      case 9:
      case 10:
        screen.style.fontSize = '60px';
        break;
      default:
        screen.style.fontSize = '25px'

  }
}