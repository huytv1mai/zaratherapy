//items//
var carts = JSON.parse(localStorage.getItem('CARTS') ?? '[]');
$('#cartItemCount').text(carts.length.toString());

//append//
var productName = localStorage.getItem('directTo');
var products = JSON.parse(localStorage.getItem('products'));
console.log(products);
var productDetail = products.find(x=>x.name === productName);
var hrefImg = `<img class="card-img-top" src="./img/products/helping/${productName}.jpg" alt="..." />`
$('#imgProduct').append(hrefImg);


$('#name').append(productDetail.name);
$('#preview').append(productDetail.preview);
$('#ingredients').append(productDetail.ingredients);
$('#oldPrice').append(productDetail.oldPrice);
$('#price').append(productDetail.price);
$('#about').append(productDetail.about);
$('#note').append(productDetail.note);
$('#details').append(productDetail.details);

//add to cart//
function onclickAddCart() {
    let quantity = $('#quantity').val();
    let item = products.find(x => x.name === productName);
    if (carts.filter(x => x.name === productName).length > 0) {
        let newArr = carts.filter(x => x.name !== productName);
        localStorage.setItem("CARTS", JSON.stringify(newArr));
        carts = newArr;
        carts.push({ name: productName, container: 'helping', oldPrice: item.oldPrice, price: item.price, count: quantity });
    }
    else {
        carts.push({ name: productName, container: 'helping', oldPrice: item.oldPrice, price: item.price, count: quantity });
    }
    saveCarts(carts);
    $('#cartItemCount').text(carts.length.toString());
}

function saveCarts(carts) {
    window.localStorage.setItem('CARTS', JSON.stringify(carts));
    location.reload();
}