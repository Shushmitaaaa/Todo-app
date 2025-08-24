//fetching the elements 
//classes are better than ids becuase you dont have to write repeated code
function addTodo(){
    const inputEl=document.querySelector("input");
    const valuee=inputEl.value;

    //inserting an element
    let ctr=1;
    const newEl=document.createElement("div");
    newEl.setAttribute("id",ctr);
    newEl.innerHTML=`<div>valuee</div><button onclick="deletetodo(${ctr})">Delete</button>`;
    ctr=ctr+1;
    document.querySelector("body").appendChild(newEl);


}

//deleting an element
function deletetodo(index){
    const element=document.getElementById(index)
    element.parentNode.removeChild(element)

}





