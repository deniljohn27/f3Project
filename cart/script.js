let cartItems=JSON.parse(sessionStorage.getItem("cart"));
let container=document.getElementById("lContainer");
let rContainer=document.getElementById("rContainer");
let sum=0;
async function getData(){
    let data=await fetch("https://fakestoreapi.com/products");
    let rData=await data.json();

    let cData=rData.filter((ele)=>{
        return cartItems.includes(ele.id);
    });

 for(let i=0;i<cData.length;i++){
    let title=cData[i].title;
    let price=`$ ${cData[i].price}`;
    let img=cData[i].image;


    let card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
                    <div class="imgDetails">
                        <img src=${img}>
                        <div class="details">
                            <p class="title">${title.substr(0,15)}</p>
                            <div class="priceSize">
                                <p class="price">${price}</p>
                            </div>
                        </div>
                    </div>    
    `
    let addBtn=document.createElement("div");
    addBtn.className="addToCart";
    addBtn.innerText="Remove From Cart";

    card.append(addBtn);
    container.append(card);

    
    // for(let j=0;j<cData.length;j++){
        let detail=document.createElement("div");
        detail.className="details";
        detail.innerHTML=`
        <div>
            ${i+1}.${title.substr(0,15)}
        </div>
         <div>
             $ ${price}
         </div>
        `
        sum+=price;
        rContainer.append(detail);
    // }
}
    document.getElementById("total").innerText=document.getElementById("total").innerText+ sum;


}
getData();
