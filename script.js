let login=document.getElementById("login");
let sign=document.getElementById("signup");

login.addEventListener("click",()=>{
    if(localStorage.getItem("users")){
        window.location.href="./login/index.html"
    }else{
        alert("No Users Present SignUp to continue");
        window.location.href="./signUp/index.html"
    }
    
});

sign.addEventListener("click",()=>{
    window.location.href="./signUp/index.html"
});