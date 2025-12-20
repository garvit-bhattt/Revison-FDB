const button = document.querySelector("#content-btn")
const content= document.querySelector("#content")

button.addEventListener("click",()=>{
    let newcont = document.createElement("div");
    newcont.innerText="Clicked!!"
    content.appendChild(newcont);
})