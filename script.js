const allItem = document.getElementsByClassName("box")
const text_body = document.querySelectorAll(".text-body")
console.log(text_body)


for(i=0; i<allItem.length; i++){
    console.log(allItem[i])
    allItem[i].addEventListener("click", (value,index) => {
        text_body[i].classList.toggle("active")
    })
}