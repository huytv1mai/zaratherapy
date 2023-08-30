
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

$('#cartItemCount').text(products.length.toString());


function onChangeCountValue(event, value) {
    // console.log(event, value);
    let id = event.target.id;
    let index = id.split('_').pop();
    let name = $(`#product_name_${index}`).text();
    let product = products.find(x => x.name === name);
    product.count = parseInt(value)
    localStorage.setItem("CARTS", JSON.stringify(products));
    location.reload();


}
function onClickTrash(event) {
    let id = event.target.id;
    let index = id.split('_').pop();
    let name = $(`#product_name_${index}`).text();
    let newArr = products.filter(x => x.name !== name);
    localStorage.setItem("CARTS", JSON.stringify(newArr));
    products = newArr;
    location.reload();
    $('#cartItemCount').text(carts.length.toString());
}

var orderSummary = 0;
products.forEach(product =>  {
    orderSummary += product.price * product.count 
    
})
var totalAmount = orderSummary
$('#orderSum').text(orderSummary)
$('#totalAmount').text(totalAmount)

  
    

