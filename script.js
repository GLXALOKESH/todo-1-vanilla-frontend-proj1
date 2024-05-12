var count=0;
function addtask(text){
    let base = document.createElement("div");
    let box = document.getElementById("tr-box");
    box.append(base);
    base.classList = "task-rem";
    let check = document.createElement("div");
    check.classList = "checkbox";
    base.append(check); 
    let cross = document.createElement("img")
    cross.src ="cross.svg"
    check.append(cross)

    let tex = document.createElement("p");
    tex.classList = "text";
    tex.innerText = text;
    tex.classList = "task-text"; 
    base.append(tex);
    count++;
    console.log(count);
    check.addEventListener("click", function() {
        let tcBox = document.getElementById("tc-box");
        tcBox.prepend(base); 
        cross.style.display = "block"
        tex.style.textDecoration = "line-through"
    });
    
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
 btn.addEventListener("click", (e)=>{
    document.getElementById("plus").classList = "rt"
    setTimeout(() => {
        document.getElementById("plus").classList = ""        
    }, 2000);



})


