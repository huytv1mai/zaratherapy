//items//
var carts = JSON.parse(localStorage.getItem('CARTS') ?? '[]');
$('#cartItemCount').text(carts.length.toString());

//append//
var productName = localStorage.getItem('directTo');
var products = JSON.parse(localStorage.getItem('products'));
console.log(products);
var hrefImg = `<img class="card-img-top" src="./img/products/Acces/${productName}.jpg" alt="..." />`
$('#imgProduct').append(hrefImg);


var productDetail = products.find(x=>x.name === productName);
$('#name').append(productDetail.name);
$('#preview').append(productDetail.preview);
$('#ingredients').append(productDetail.ingredients);
$('#oldPrice').append(productDetail.oldPrice);
$('#price').append(productDetail.price);
$('#about').append(productDetail.about);
$('#description').append(productDetail.description);
$('#details').append(productDetail.details);

// add to cart//
function onclickAddCart() {
    let quantity = $('#quantity').val();
    let item = carts.find(x=>x.name === productName);
    carts.push({ name: productName, container: 'Acces', oldPrice: item.oldPrice, price: item.Price, count: quantity });
    //kiem tra xem trong mang carts ton tai item chua
    //neu co roi thi thay doi quantity cua no o trong mang carts
    //neu chua thi push moi 1 item vo mang carts

    saveCarts(carts);
    $('#cartItemCount').text(carts.length.toString());
}

function saveCarts(carts) {
    window.localStorage.setItem('CARTS', JSON.stringify(carts));
}


    

