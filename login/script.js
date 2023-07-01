
const email=document.getElementById("email");
const password=document.getElementById("password");
const loginBtn=document.getElementById("loginBtn");
const currentUser={};

loginBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    validation();
});

function validation(){
    if(email.value===""||password.value===""){
        alert("All fields required");
        return;
    }
    let users=JSON.parse(sessionStorage.getItem("users"));

    for(let i=0;i<users.length;i++){

        if(users[i].emailId===email.value){
            if(users[i].passwordUnique===password.value){
                console.log(users[i].passwordUnique,password.value);
                localStorage.setItem("currentUser",JSON.stringify(users[i]));
                sessionStorage.setItem("currentUser",JSON.stringify(users[i]))
                alert("logined");
                window.location.href="../profile/index.html";
            }else{
                alert("Wrong Password");
                password.value="";
            }
            return; 
        }
        // console.log("6");
        
    }
   
    // alert("No User Exist")

}