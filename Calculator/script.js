const display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button=>{
    button.addEventListener('click', (e)=>{
        switch (e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText = "Error!"
                }
                break;
            case 'CE':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '%':
                try{
                display.innerText = display.innerText/100;
                }
                catch{
                    display.innerText = "Error!";
                }
                break;
            case 'sqrt':
                try{
                    display.innerText = Math.sqrt(display.innerText);
                    break;
                }
                catch{
                    display.innerText = "Error!";
                }
                break;
            case 'Sin':
                try{
                    display.innerText = Math.sin(display.innerText);
                    break;
                }
                catch{
                    display.innerText = "Error!"
                }
                break;
            case 'Cos':
                try{
                    display.innerText = Math.cos(display.innerText);
                    break;
                }
                catch{
                    display.innerText = "Error!"
                }
                break;
            case 'Tan':
                try{
                    display.innerText = Math.tan(display.innerText);
                    break;
                }
                catch{
                    display.innerText = "Error!"
                }
                break;
        default:
            display.innerText += e.target.innerText;
        }
    });
});

document.addEventListener('keyup', (e) => {
    if(((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/'].includes(e.key)) && !e.shiftKey){
      display.innerText += e.key;
    }

    if(e.key === 'Enter'){
      try {
        display.innerText = eval(display.innerText);
      }
      catch {
        display.innerText = "Error"
      }
    }
    if(e.key === 'Backspace'){
      display.innerText = display.innerText.slice(0, -1);
    }
    if(e.key === 'Delete'){
      display.innerText = "";
    }
})