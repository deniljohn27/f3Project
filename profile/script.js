const fName=document.getElementById("fName");
const lName=document.getElementById("lName");
const oldPassword=document.getElementById("oldPassword");
const newPassword=document.getElementById("newPassword");
const conPassword=document.getElementById("conPassword");
const saveInfoBtn=document.getElementById("saveInfoBtn");
const changePasswordBtn=document.getElementById("changePasswordBtn");
const logoutBtn=document.getElementById("logoutBtn");
const shoppingCartBtn=document.getElementById("shoppingCart");


let currentUser=JSON.parse(sessionStorage.getItem("currentUser"));
fName.value=currentUser.firstName;
lName.value=currentUser.lastName;


saveInfoBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    saveInfo();
});

changePasswordBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    changePassword();
});

logoutBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    logOut();
});

shoppingCartBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href="../itemspage/index.html";
});


function updateUserList(){
    let usersList=JSON.parse(sessionStorage.getItem("users"));
    for(let i=0;i<usersList.length;i++){
        if(usersList[i].emailId===currentUser.emailId){
            usersList.splice(i,1);
            usersList.push(currentUser);
            sessionStorage.setItem("users",JSON.stringify(usersList));
            localStorage.setItem("users",JSON.stringify(usersList));
        }
    }
}
function saveInfo(){
    currentUser.firstName=fName.value;
    currentUser.lastName=lName.value;
    sessionStorage.setItem("currentUser",JSON.stringify(currentUser));
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    updateUserList();


}
function changePassword(){
    console.log(oldPassword.value,currentUser.passwordUnique);
    if(oldPassword.value===currentUser.passwordUnique){
        if(oldPassword.value===newPassword.value){
            alert("Do not repeat old password");
        }else{
            if(newPassword.value===conPassword.value){
                currentUser.passwordUnique=newPassword.value;
                sessionStorage.setItem("currentUser",JSON.stringify(currentUser));
                localStorage.setItem("currentUser",JSON.stringify(currentUser));

                updateUserList();

            }else{
                alert("Password should be matching")
            }
        }
    }else{
        alert("Wrong Old Password");
    }
}

function logOut(){
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    window.location.href="../login/index.html";
}