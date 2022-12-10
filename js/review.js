let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}


let names = document.getElementById("name")
let gmail = document.getElementById("gmail")
let description = document.getElementById("description")
let btn = document.getElementById("btn")
let dynamicCards = document.getElementById("dynamicCards")

////////////// Don't Touch Any Programm/////////////////



btn.addEventListener("click", ()=>{
   
    if (names.value==""){
        alert("ENTER YOUR NAME")
    }

    else if(gmail.value=="")
    alert("ENTER YOUR GMAIL")


    else if(description.value=="")
    alert("ENTER YOR DESCRIPTION")

    else if(gmail.value.trim().toLocaleLowerCase().includes("gmail.com"))
        {
            return alert("working")
        }
    
     else{
        let key1 =("name")
        let value1 =(names.value)
        localStorage.setItem(key1,value1)
        let key2 =("gamail")
        let value2 =(gmail.value)
        localStorage.setItem(key2,value2)
        let key3 =("description")
        let value3 =(description.value)
        localStorage.setItem(key3,value3)
        
        dynamicCards.innerHTML += `
        <div class="card col-lg-10">
                <img src="/images/reviewPage/user.png" alt="" class="shadow">
                <h1>${value1}</h1>  
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <p>${value3}</p>
            </div>
        `
        names.value = ""
        gmail.value = ""
        description.value = ""
        
    }
})
