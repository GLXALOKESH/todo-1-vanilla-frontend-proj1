function addtask(text){
    let base = document.createElement("div");
    let box = document.getElementById("tr-box");
    box.append(base);
    base.classList = "task-rem";
    let check = document.createElement("div");
    check.classList = "checkbox";
    base.append(check); 
    let tex = document.createElement("p");
    tex.classList = "text";
    tex.innerText = text;
    tex.classList = "task-text"; 
    base.append(tex);
}
console.log("Script running");

let btn = document.getElementById("addTaskBtn")
btn.addEventListener("click", (e)=>{
    document.getElementById("wall1").style.display = "block"
    document.getElementById("text-inp-main").style.display = "flex"
})

let closee = document.getElementById("close-box")
closee.onclick = (e)=>{
    document.getElementById("wall1").style.display = "none"
    document.getElementById("text-inp-main").style.display = "none"

}
 let add= document.getElementById("task-add")
 add.onclick = (e) =>{
    let text = document.getElementsByClassName("text")[0].value
    
    if (text.trim() !== "") { 
        addtask(text);
        document.getElementById("wall1").style.display = "none";
        document.getElementById("text-inp-main").style.display = "none"; 
    } else {
        alert("Task description cannot be empty!");
    }
 }


