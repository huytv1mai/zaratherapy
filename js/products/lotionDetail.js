//items//
var products = JSON.parse(localStorage.getItem('CARTS') ?? '[]');
$('#cartItemCount').text(products.length.toString());

//append//
var productName = localStorage.getItem('directTo');
var product = JSON.parse(localStorage.getItem('products'));
console.log(product);
var hrefImg = `<img class="card-img-top" src="./img/products/lotion/${productName}.jpg" alt="..." />`
$('#imgProduct').append(hrefImg);


var productDetail = product.find(x=>x.name === productName);
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
    let Detail = products.find(x=>x.name === productName);
    products.push({ name: productName, container: 'lotion', oldPrice: Detail.oldPrice, price: Detail.Price, count: quantity });

    saveCarts(products);
    $('#cartItemCount').text(products.length.toString());
}

function saveCarts(products) {
    window.localStorage.setItem('CARTS', JSON.stringify(products));
}


    

