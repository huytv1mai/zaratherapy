// var products = [
//     { name: 'Cetaphil', container: 'lotion', price: 15, oldPrice: 20 },
//     { name: 'Aveeno', container: 'lotion', price: 18, oldPrice: 21 },
//     { name: 'Eucerin', container: 'lotion',price: 28, oldPrice: 32 },
//     { name: 'Kiehls', container: 'lotion', price: 25, oldPrice: 32 },
//     { name: 'Lubriderm', container: 'lotion', price: 25, oldPrice: 29 },
//     { name: 'Obagi-C RX', container: 'lotion', price: 21, oldPrice: 25 },
// ]
//Cart
 // Variable to store cart items
 let cartItems = [];

 // Function to add an item to the cart
 function addProduct() {
     const itemName = document.querySelector('.btn[data-name]').getAttribute('data-name');
     const itemQuantity = parseInt(document.getElementById('quantity').value);
   
     const existingItemIndex = cartItems.findIndex(item => item.name === itemName);
   
     if (existingItemIndex !== -1) {
       cartItems[existingItemIndex].quantity += itemQuantity;
     } else {
       cartItems.push({ name: itemName, quantity: itemQuantity });
     }
   
     updateCart();
   }
 
 // Event listener for "Add to Cart" buttons on products
function updateCart() {
    let cartItemCount = 0;
    cartItems.forEach(item => {
      cartItemCount += item.quantity;
    });
  
    document.getElementById('cartItemCount').textContent = cartItemCount;
  
    // Lưu số đếm vào LocalStorage
    localStorage.setItem('cartItemCount', cartItemCount);
  }
  
  // Khi load trang, kiểm tra nếu có số đếm đã lưu trong LocalStorage
  document.addEventListener('DOMContentLoaded', function() {
    const savedCartItemCount = localStorage.getItem('cartItemCount');
    if (savedCartItemCount !== null) {
      document.getElementById('cartItemCount').textContent = savedCartItemCount;
    }
  });


var products = JSON.parse(localStorage.getItem('CARTS') ?? '[]');

console.log(products);
for (var i = 0; i < products.length; i++) {
    var htmlCart = `<tr id="item_${i}" class="border-bottom">
        <td>
            <div class="d-flex align-items-center">
                <div> <img class="pic"
                        src="./img/products/${products[i].container}/${products[i].name}.jpg"
                        alt=""> </div>
                <div class="ps-3 d-flex flex-column justify-content">
                    <p id="product_name_${i}" class="fw-bold">${products[i].name}</p> 
                </div>
            </div>
        </td>
        <td>
            <div class="d-flex">
                <p class="pe-3"><span class="red">$${products[i].price}</span></p>
                <p class="text-muted text-decoration-line-through">$${products[i].oldPrice}</p>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center"> 
                <span class="pe-3 text-muted">Quantity </span> 
                <span class="pe-3"> 
                <input id = "quantity_${i}" onchange="onChangeCountValue(event, value)" class="ps-2" type="number" min="0" value="${products[i].count}"/>
                </span>
            </div>

        </td>
        <td>
            <div class="d-flex align-items-center"> 
            <i id="trash_${i}" class="fa fa-trash-o" style="font-size:18px color:red" () ></i>
            </div>
        </td>
    </tr> `;
    $('#productsList').append(htmlCart); //document.getElementById('htmlCart')
    $('#trash_' + i).bind('click', function (event) { onClickTrash(event); });
};

$('#cartItemCount1').text(products.length.toString());


function onChangeCountValue(event, value) {
    // console.log(event, value);
    let id = event.target.id;
    let index = id.split('_').pop();
    let name = $(`#product_name_${index}`).text();
    let product = products.find(x => x.name === name);
    product.count = parseInt(value)
    localStorage.setItem("CARTS", JSON.stringify(products));

}
function onClickTrash(event) {
    let id = event.target.id;
    let index = id.split('_').pop();
    let name = $(`#product_name_${index}`).text();
    let newArr = products.filter(x => x.name !== name);
    localStorage.setItem("CARTS", JSON.stringify(newArr));
    products = newArr;
    location.reload();
    $('#cartItemCount1').text(carts.length.toString());
}

var orderSummary = 0;
products.forEach(product =>  {
    orderSummary += product.price * product.count 
})
$('#orderSum').text(orderSummary)
  
    

