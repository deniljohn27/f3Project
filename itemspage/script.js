
let mens=[];
let womens=[];
let jewel=[];
let elect=[];
let all;
let cart=[];
const colors=["Red","Blue","Green","Black","White"];
const size=["S","M","L","XL"];

async function getData(){
    let data=await fetch("https://fakestoreapi.com/products");
    let rData=await data.json();

    rData.forEach((ele)=>{
        ele["color"]=colors[Math.floor(Math.random() * (4 - 0) + 0)];
        ele["size"]=size[Math.floor(Math.random() * (3 - 0) + 0)];
    });

//    console.log(rData);
    //  all=JSON.parse(JSON.stringify(rData));
    categoriseData(rData);
    
}


// console.log(Math.floor(Math.random() * (4 - 0) + 0)); 
function categoriseData(rData){
    rData.forEach((ele)=>{
        if(ele.category==="men's clothing"){mens.push(ele);}
        if(ele.category==="women's clothing"){womens.push(ele);}
        if(ele.category==="jewelery"){jewel.push(ele);}
        if(ele.category==="electronics"){elect.push(ele);}
    });
    displayAllData(mens,womens,jewel,elect);
    
}

let mContainer=document.getElementById("mensDisplay");
let wContainer=document.getElementById("womensDisplay");
let jContainer=document.getElementById("jewelleryDisplay");
let eContainer=document.getElementById("electronicsDisplay");

let categories=document.getElementsByClassName("categoryItems");

categories[0].addEventListener("click",()=>{
    changeToWhite(categories);
    selected(categories[0]);
    mContainer.innerText=" ";
    wContainer.innerText=" ";
    jContainer.innerText=" ";
    eContainer.innerText=" ";
    displayAllData(mens,womens,jewel,elect);
    document.getElementById("womens").style.display="block";
    document.getElementById("jewellery").style.display="block";
    document.getElementById("electronics").style.display="block";
    document.getElementById("mens").style.display="block";
 });
 categories[1].addEventListener("click",()=>{
    changeToWhite(categories);
    selected(categories[1]);
    mContainer.innerText=" ";
    displayAllData(mens,womens,jewel,elect);
    document.getElementById("womens").style.display="none";
    document.getElementById("jewellery").style.display="none";
    document.getElementById("electronics").style.display="none";
    document.getElementById("mens").style.display="block";

 })
 categories[2].addEventListener("click",()=>{
    changeToWhite(categories);
    selected(categories[2]);
    wContainer.innerText=" ";
    displayAllData(mens,womens,jewel,elect);
    document.getElementById("mens").style.display="none";
    document.getElementById("jewellery").style.display="none";
    document.getElementById("electronics").style.display="none";
    document.getElementById("womens").style.display="block";


 })
 categories[3].addEventListener("click",()=>{
    changeToWhite(categories);
    selected(categories[3]);
    jContainer.innerText=" ";
    displayAllData(mens,womens,jewel,elect);
    document.getElementById("womens").style.display="none";
    document.getElementById("mens").style.display="none";
    document.getElementById("electronics").style.display="none";
    document.getElementById("jewellery").style.display="block";


 })
 categories[4].addEventListener("click",()=>{
    changeToWhite(categories);
    selected(categories[4]);
    eContainer.innerText=" ";
    displayAllData(mens,womens,jewel,elect);
    document.getElementById("womens").style.display="none";
    document.getElementById("mens").style.display="none";
    document.getElementById("jewellery").style.display="none";
    document.getElementById("electronics").style.display="block";

 })

function displayAllData(mens,womens,jewel,elect){
//   console.log(mens);
    display(mens,mContainer);
    display(womens,wContainer);
    display(jewel,jContainer);
    display(elect,eContainer);
    // console.log(mContainer);

}

window.onload =()=>{
    getData();
    // displayAllData(mens,womens,jewel,elect);
    categories[0].style.backgroundColor="black";
    categories[0].style.color="white";

};



let i=0;
function display(list,container){
 for(let i=0;i<list.length;i++){

 
    let title=list[i].title;
    let price=`$ ${list[i].price}`;
    let rating=list[i].rating.rate;
    let img=list[i].image;
    let size=list[i].size;
    let color=list[i].color;

    let card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
                    <div class="imgDetails">
                        <img src=${img}>
                        <div class="details">
                            <p class="title">${title.substr(0,15)}</p>
                            <div class="priceSize">
                                <p class="price">${price}</p>
                                <p class="size">${size}</p>
                            </div>
                            <p class="colors">Colors : ${color} </p>
                            <p class="sRatings">Rating : ${rating}</p>
                        </div>
                    </div>    
    `
    let addBtn=document.createElement("div");
    addBtn.className="addToCart";
    addBtn.innerText="Add To Cart";
    addBtn.addEventListener("click",()=>{
        if(cart.includes(list[i].id)){
            alert("Item Already in the cart");
        }else{
            cart.push(list[i].id);
        }
        
        console.log(list[i].id,cart);
    });
    card.append(addBtn);
    container.append(card);
}


};

function changeToWhite(categories){
    
    for(let i=0;i<categories.length;i++){
                categories[i].style.backgroundColor="white";
                categories[i].style.color="black";
    }
}
function selected(ele){
    ele.style.backgroundColor="black";
    ele.style.color="white";
}

///////////////////////////////////FILTER FUNCTIONS
let search=document.getElementById("search");

let containers=[mContainer,wContainer,jContainer];

search.addEventListener("change",()=>{
    clearContainer(containers);
   let sMens= mens.filter((ele)=>{
        return ele.title.toLowerCase().includes(search.value.toLowerCase())
    });
    let sWomens= womens.filter((ele)=>{
        return ele.title.toLowerCase().includes(search.value.toLowerCase())
    });
    let sJewellery=jewel.filter((ele)=>{
        return ele.title.toLowerCase().includes(search.value.toLowerCase())
    });
    let sElectronics= elect.filter((ele)=>{
        return ele.title.toLowerCase().includes(search.value.toLowerCase())
    });

    if(sMens.length!=0){
        // clearContainer(containers);
        display(sMens,mContainer);
        document.getElementById("mens").style.display="block";
    }else{      
        document.getElementById("mens").style.display="none";  
    }
    if(sWomens.length!=0){
        // clearContainer(containers);
        display(sWomens,wContainer);
        document.getElementById("womens").style.display="block";
    }else{
        document.getElementById("womens").style.display="none";
    }
    if(sJewellery.length!=0){
        // clearContainer(containers);
        display(sJewellery,jContainer);
        document.getElementById("jewellery").style.display="block";
    }else{
        document.getElementById("jewellery").style.display="none";
    }
    if(sElectronics.length!=0){
        // clearContainer(containers);
        display(sElectronics,eContainer);
        document.getElementById("electronics").style.display="block";
    }else{
        document.getElementById("electronics").style.display="none";
    }
    // clearContainer(containers)
    // console.log(sMens);
});
function clearContainer(containers){
    containers.forEach((ele)=>{
        ele.innerText=" ";
    })
}


let filters=document.getElementsByClassName("filterLabel");
let checkedValue=[];
let filterBtn=document.getElementById("applyFilter");

filterBtn.addEventListener("click",()=>{
    changeToWhite(categories);
    checkedValue=[];
    for(let i=0;i<=8;i++){
        if(filters[i].checked== true){      
           checkedValue.push(filters[i].value) 
        }
    }
    console.log(filters.length,checkedValue);

    clearContainer(containers);
    let fMens=mens.filter((ele)=>{
        return checkedValue.includes(ele.color.toLowerCase()) ||checkedValue.includes(ele.size.toLowerCase());
    });
    let fWomens=womens.filter((ele)=>{
        return checkedValue.includes(ele.color.toLowerCase()) ||checkedValue.includes(ele.size.toLowerCase());
    });
    let fJewellery=jewel.filter((ele)=>{
        return checkedValue.includes(ele.color.toLowerCase()) ||checkedValue.includes(ele.size.toLowerCase());
    });
    let fElectronics=elect.filter((ele)=>{
        return checkedValue.includes(ele.color.toLowerCase()) ||checkedValue.includes(ele.size.toLowerCase());
    });



    // console.log(fElectronics,fJewellery,fMens,fWomens);

    if(fMens.length!=0){
        // clearContainer(containers);
        display(fMens,mContainer);
        document.getElementById("mens").style.display="block";
    }else{      
        document.getElementById("mens").style.display="none";  
    }
    if(fWomens.length!=0){
        // clearContainer(containers);
        display(fWomens,wContainer);
        document.getElementById("womens").style.display="block";
    }else{
        document.getElementById("womens").style.display="none";
    }
    if(fJewellery.length!=0){
        // clearContainer(containers);
        display(fJewellery,jContainer);
        document.getElementById("jewellery").style.display="block";
    }else{
        document.getElementById("jewellery").style.display="none";
    }
    if(fElectronics.length!=0){
        // clearContainer(containers);
        display(fElectronics,eContainer);
        document.getElementById("electronics").style.display="block";
    }else{
        document.getElementById("electronics").style.display="none";
    }

});

let myCart=document.getElementById("cart");
myCart.addEventListener("click",()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
    sessionStorage.setItem("cart",JSON.stringify(cart));
    window.location.href="../cart/index.html";
});
