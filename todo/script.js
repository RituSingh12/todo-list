let arr=JSON.parse(localStorage.getItem("todo"))||[];

let creat_add=()=>{
    // add
    let text=document.getElementById("text").value;

    if(text==""){
        console.log("no");
    }
    else{
        arr.push(text);
        localStorage.setItem('todo',JSON.stringify(arr));
    }

    // display
    let html="";
    arr.forEach(function(element,index) {
    html+=`<div class="todo">
                <p id="work">${element}</p>
                <i class="fas fa-trash del" onclick=del(this)></i>
            </div> `;
    });
    
    let body= document.querySelector(".bottom");
    if(arr.length!=0){
        body.innerHTML=html
    }
    else{
        body.innerHTML=`<h1 style="text-align: center; color: white; font-size: 60px; margin-top: 250px;">Nothing to show! Add Todos</h1>`;
    }

    document.getElementById("text").value="";
}

// delete
let del=(d)=>{
    // let a =d.id;
    d.parentElement.remove();
    arr.splice(arr.indexOf(d),1);
    localStorage.setItem('todo',JSON.stringify(arr));
}

document.getElementById("addTodo").addEventListener('click',()=>{
    creat_add();
});

creat_add();
