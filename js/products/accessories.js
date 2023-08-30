var products = [
    { name: 'Balance Ball', price: 14, oldPrice: 20, container: 'Acces'},
    { name: 'Mini Exercise Bike', price: 55, oldPrice: 60, container: 'Acces' },
    { name: 'Muscle Stimulator', price: 50, oldPrice: 69, container: 'Acces' },
    { name: 'Dumbbell', price: 9, oldPrice: 12, container: 'Acces' },
    { name: 'Wheel Chair', price: 125, oldPrice: 149, container: 'Acces' },
    { name: 'Yoga Mat', price: 10, oldPrice: 16, container: 'Acces' },
]

const keyCarts = 'CARTS';

for (var i = 0; i < products.length; i++) {
    var htmlElement = `<div class="col mb-5 service-item-prd">
        <div class="card h-100">
            <a href="AccessoriesDetail.html" onClick="directToDetailPage(event)">
            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                                Sale
                            </div>
                <!-- Product image-->
                <img class="card-img-top" id= "${products[i].name}" src="./img/products/Acces/${products[i].name}.jpg" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 id="production_name_${i}" class="fw-bolder">${products[i].name}</h5>
                        <!-- Product price-->
                         ${products[i].oldPrice
            ? `<span class="old-price text-muted text-decoration-line-through">$${products[i].oldPrice}</span> `
            : ''}   
                          $<span id="production_price_${i}">${products[i].price} </span>
                    </div>
                </div>
            </a>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><button id="addToCartBtn_${i}" class="btn btn-outline-dark mt-auto" >Add to cart</button>
                </div>
            </div>
        </div>
    </div>`;

    $('#productsBoard').append(htmlElement); //document.getElementById('productsBoard');
    $('#addToCartBtn_' + i).bind('click', function (event) { //htmeElement.AddEventListener('click',function);
        addItemToCart(event);
    })
}

var carts = JSON.parse(window.localStorage.getItem(keyCarts) ?? '[]');

function addItemToCart(event) {
    let id = event.currentTarget.id;
    let index = id.split('_').pop();
    let productionName = $('#production_name_' + index).text();
    let productionPrice = $('#production_price_' + index).text();

    if (carts.filter(x => x.name === productionName).length > 0) {
        // ko phai add lan dau
        let product = carts.filter(x => x.name === productionName).pop();
        product.count++;
    }
    else { // add lan dau
        let product = products.find(x => x.name === productionName);
        carts.push({ name: productionName, container: 'Acces', oldPrice: product.oldPrice, price: parseInt(productionPrice), count: 1 });
    };
    saveCarts(carts);
    $('#cartItemCount').text(carts.length.toString());
}

function saveCarts(carts) {
    window.localStorage.setItem(keyCarts, JSON.stringify(carts));
}

function directToDetailPage(event) {
    console.log(event)
    let id = event.target.id
    localStorage.setItem("directTo", id)
}