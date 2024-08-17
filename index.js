const input=document.getElementById('input-box')
const lists=document.getElementById('list-container');


function addtask() {
    if (input.value == '') {
        alert('please write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        lists.appendChild(li);  // Corrected variable name to "lists" from "list"
        console.log(lists);    
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    savedata()
}

lists.addEventListener('click',function(e){
if(e.target.tagName==='LI'){
    // e.target.classList.toggle('checked')
    savedata()
}else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
savedata()
}
},false)

function savedata(){
    localStorage.setItem('data',lists.innerHTML)
}

function showtask(){
    lists.innerHTML=localStorage.getItem("data")
}

showtask()