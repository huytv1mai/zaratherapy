// Chọn phần tử carousel và nút trái, phải
const testimonialCarousel = $(".testimonial-carousel");
const prevButton = $("#prevTestimonial");
const nextButton = $("#nextTestimonial");

// Khởi tạo carousel
testimonialCarousel.owlCarousel({
  items: 1, // Hiển thị một item mỗi lần
  loop: true, // Lặp lại vô hạn
  nav: false, // Tắt mặc định của các nút trái, phải
  dots: false, // Tắt mặc định của các điểm chuyển
});

// Xử lý sự kiện khi nút trái được nhấn
prevButton.on("click", function () {
  testimonialCarousel.trigger("prev.owl.carousel");
});

// Xử lý sự kiện khi nút phải được nhấn
nextButton.on("click", function () {
  testimonialCarousel.trigger("next.owl.carousel");
});
