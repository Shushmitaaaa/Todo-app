
let currentIndex=1;

function addTodo(){
    const inputEl=document.querySelector("input");
    const inputElval=inputEl.value;

    if(inputElval.trim()===" "){
        alert("Please enter a to do item");
        return;
    }

    const parentEl=document.getElementById("todos");

    const newtodo=document.createElement("span");
    newtodo.setAttribute("id", + currentIndex);

    //text
    const newheading= document.createElement("h4");
    newheading.textContent= inputElval;

    //button
    const newButton=document.createElement("button");
    newButton.textContent="Delete";
    newButton.setAttribute("onclick","deleteTodo(" +currentIndex+ ")")

    newtodo.appendChild(newheading);
    newtodo.appendChild(newButton);

    parentEl.appendChild(newtodo);

    //document.querySelector("body").appendChild(parentEl);

    currentIndex++;

    inputEl.value='';



}

function deleteTodo(index){
    const ele=document.getElementById(index);
        if(ele){
            ele.parentNode.removeChild(ele);
        }
    
}






