//first
const products=[
{
id:1,
name:"Gun",
price:30000,
image:"images/shop1.jpg"
},
{
id:2,
name:"Single Uniform",
price:500,
image:"images/shop3.jpg"    
},
{
id:3,
name:"Uniform Set",
price:1200,
image:"images/shop2.jpg"
}
];
//second
let cart = [];

const productDiv=document.getElementById("products");

products.forEach(product=>{

    productDiv.innerHTML+=`
    
    <div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<h2>P${product.price}</h2>


<button class="add"
onclick="addCart(${product.id})">
Add to Cart 
</button>

</div>
`;
});
//third
function addCart(id){
    let item=cart.find(x=>x.id===id);

    if(item){

        item.qty++;
    }else{

        let product=products.find(x=>x.id===id);
        cart.push({...product,qty:1});

    }
    displayCart();
}
//fourth
function displayCart(){
    let output="";
    let total=0;

    cart.forEach(item=>{
        
    let sub=item.price*item.qty;
    
    total+=sub;

    output+=`
    <tr> 
    <td>${item.name}</td>
    <td>P${item.price}</td>
    <td>
        <button class="qty" onclick="minus(${item.id})">-</button>
        ${item.qty}

        <button class="qty" onclick="plus(${item.id})">+</button> 
    </td>

    <button class ="remove"
    onclick="removeItem(${item.id})">Delete</button>
    </td>
    </tr>

    `;
    });

    document.getElementById("cartItems").innerHTML=output;
    document.getElementById("grandTotal").innerHTML=total;
    document.getElementById("count").innerHTML=cart.length;
}
//fifth
function plus(id){

    cart.find(x=>x.id===id).qty++;
    displayCart();
}
//six
function minus(id){
    let item=cart.find(x=>x.id===id);
    item.qty--;
    if(item.qty==0){
        cart=cart.filter(x=>x.id!==id);
    }
displayCart();
}
//seven
function removeItem(id){

    cart=cart.filter(x=>x.id!==id);
    displayCart();
}

