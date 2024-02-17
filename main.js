let form=document.getElementById("form");
let textHere=document.getElementById("textHere");
let added=document.getElementById("added");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked")
    if(textHere.value===""){
        console.log("Write someting")
    }else{
        let data={};
        data["text"]=textHere.value;
        added.innerHTML+=
        `
        <div class="added">
            <p>${data.text}</p>
            <span>
                <i onclick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
                <i onclick="trashTask(this)" class="fa-solid fa-trash"></i>
            </span>
        </div>
        
        `
        textHere.value="";
    }
})


let editTask=(e)=>{
    textHere.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
let trashTask=(e)=>{
    e.parentElement.parentElement.remove();
}