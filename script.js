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
    // alert("hello")
    addtask("hello");
})
