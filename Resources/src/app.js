const colors=["red","green","yellow", "pink" , "rgb(66, 56, 160)"]
let button = document.getElementById("btn")
let color= document.querySelector(".color")

button.addEventListener("click",function(){
    const randon= getrandom()
    console.log(randon);
    document.body.style.backgroundColor= colors[randon]
    color.innerHTML=colors[randon]
})

function getrandom(){
    return Math.floor(Math.random()* colors.length)
}