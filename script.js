const notesContaine=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes()
{
    notesContaine.innerHTML=localStorage.getItem("notes")
}
showNotes();

function updateStorage()
{
    localStorage.setItem("notes",notesContaine.innerHTML);
}




createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesContaine.appendChild(inputBox).appendChild(img);
})

notesContaine.addEventListener("click",function(e)
{
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="p")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function()
            {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})