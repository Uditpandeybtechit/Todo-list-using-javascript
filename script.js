

const inputdata = document.getElementById("inp");
const listdata = document.getElementById("listcontainer")
const clicked = () => {
    if(inputdata.value=="")
    {
        alert("You must write something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputdata.value;
    listdata.appendChild(li);
    const span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
    }
    inputdata.value="";
    savedata();
}
listdata.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        console.log(this.parentElement);
        savedata();
    }
    else{
    event.target.parentElement.remove();
    // console.log(this.parentElement);
    savedata();
    }
})
function savedata(){
   localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();