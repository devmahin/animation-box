const main = document.getElementsByClassName("item")
const hiddenbox = document.querySelector(".hiddenbox")
const addicon = document.getElementsByClassName("add")
const close = document.getElementsByClassName("close")



for(let i=0; i<main.length; i++){
    main[i].addEventListener("click", (e) => {
       let result =  main[i].classList.toggle("active")
       if(result){
        addicon[i].style.display = "none";
        close[i].style.display = "block";
       }else{
        addicon[i].style.display = "block";
        close[i].style.display = "none";
       }
    })

}