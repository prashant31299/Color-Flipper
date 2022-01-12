const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button = document.getElementById("btn")
let color= document.querySelector(".color")

button.addEventListener("click",function(){
    let hexc="#"
    for (let i=0; i<6;i++){
        hexc+=hex[getrandom()]
    }
    const randon= getrandom()
    console.log(randon);
    document.body.style.backgroundColor= hexc
    color.innerHTML=hexc
})
    

function getrandom(){
    return Math.floor(Math.random()* hex.length)
}