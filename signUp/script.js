const fName=document.getElementById("fName");
const lName=document.getElementById("lName");
const email=document.getElementById("email");
const password=document.getElementById("password");
const conPassword=document.getElementById("conPassword");
const signupBtn=document.getElementById("signupBtn");

signupBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    validation();
});

function validation(){
    
    if(fName.value===""||lName.value===""||email.value===""||password.value===""||conPassword.value===""){
        alert("All fields are required")
    }else{
        if(localStorage.getItem("users")){
            let listUsers=JSON.parse(localStorage.getItem("users"));
            let userFlag=false;
            for(let i=0;i<listUsers.length;i++){
                if(listUsers[i].emailId===email.value){
                    userFlag=true;
                }
            }
            if(userFlag){
                alert("User Already Exist");
                window.location.href="../login/index.html";
            }
            else{
                let user={
                    firstName:fName.value,
                    lastName:lName.value,
                    emailId:email.value,
                    passwordUnique:password.value,
                }
                listUsers.push(user);
                localStorage.setItem("users",JSON.stringify(listUsers));
                sessionStorage.setItem("users",JSON.stringify(listUsers));
                window.location.href="../login/index.html";
               
            }
        }else{
            if(password.value!==conPassword.value){
                alert("Passwords should match");
                password.value="";
                conPassword.value="";
                return;
            }
            let users=[];
            let user={
                firstName:fName.value,
                lastName:lName.value,
                emailId:email.value,
                passwordUnique:password.value,
            }
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            sessionStorage.setItem("users",JSON.stringify(users));
            window.location.href="../login/index.html";
        }

    }
}
