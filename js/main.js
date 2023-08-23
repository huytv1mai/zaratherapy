(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

//Cart
 // Variable to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
}

// Function to update the cart details and calculate total price
function updateCart() {
  let cartTotal = 0;
  let cartItemsHtml = '';
  for (let item of cartItems) {
    cartItemsHtml += `<div>${item.name} - $${item.price}</div>`;
    cartTotal += item.price;
  }
  document.getElementById('cartItems').innerHTML = cartItemsHtml;
  document.getElementById('cartTotal').innerHTML = `Total: $${cartTotal}`;
}

// Event listener for form submission (checkout)
document.getElementById('checkoutForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Handle checkout form data, send data to the server, and show order confirmation if needed.
  // Here, I am just closing the checkout modal and showing an alert for demonstration purposes.
  $('#checkoutModal').modal('hide');
  alert('Order placed successfully! Thank you for your purchase.');
});

// Event listener for "Add to Cart" buttons on products
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', function () {
    const itemName = button.getAttribute('data-item-name');
    const itemPrice = parseFloat(button.getAttribute('data-item-price'));
    addToCart(itemName, itemPrice);
    // Show cart modal when an item is added to the cart
    $('#cartModal').modal('show');
  });
});

//Event Make Appointment - Enable form validation
document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM Content Loaded");
    (function () {
        'use strict';

        var form = document.getElementById('appointmentForm');
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent form submission
                // Display success message
                showAlert("Appointment successfully made!", "success");
            }
            
            form.classList.add('was-validated');
        });

        // Function to show an alert message
        function showAlert(message, type) {
            var alertDiv = document.createElement("div");
            alertDiv.className = `alert alert-${type} mt-4`;
            alertDiv.textContent = message;
            document.querySelector(".appointment-form").appendChild(alertDiv);
            
            // Automatically hide the alert after 3 seconds
            setTimeout(function () {
                alertDiv.remove();
            }, 3000);
        }
    })();
});










