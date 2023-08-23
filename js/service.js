// Get all service items
const serviceItems = document.querySelectorAll(".service-item");

// Get the modal elements
const serviceModal = document.getElementById("serviceModal");
const popupImage = document.getElementById("popupImage");
const modalTitle = document.getElementById("serviceModalLabel");
const serviceDescription = document.getElementById("serviceDescription");

// Service data
const services = [
  {
    imageUrl: "img/service-1.jpg",
    title: "Physical Therapy",
    description: "Discover the benefits of physical therapy, a comprehensive approach to treating injuries and improving mobility. Our experienced therapists provide personalized treatment plans to help you recover and regain strength. Whether you're an athlete or recovering from an accident, our physical therapy services are tailored to your needs."
  },
  {
    imageUrl: "img/service-2.jpg",
    title: "Massage and Acupressure",
    description: "Experience the relaxation and healing power of massage and acupressure. Our skilled practitioners use various techniques to release tension, reduce stress, and promote overall well-being. Discover the rejuvenating effects of traditional therapies that have stood the test of time."
  },
  {
    imageUrl: "img/service-3.jpg",
    title: "Psychological Counseling",
    description: "Take a step towards mental wellness with our psychological counseling services. Our compassionate counselors provide a safe space for you to explore your thoughts, emotions, and challenges. Through personalized sessions, we aim to guide you towards greater self-awareness and emotional balance."
  },
  {
    imageUrl: "img/service-4.jpg",
    title: "Cupping Therapy",
    description: "Uncover the ancient healing practice of cupping therapy. Using suction and negative pressure, this technique stimulates blood flow, promotes relaxation, and eases muscle tension. Whether you're seeking relief from pain or looking to improve your overall wellness, our cupping therapy sessions offer a unique and holistic approach."
  },
  
];

// Loop through each service item and add click event
serviceItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    popupImage.src = services[index].imageUrl;
    modalTitle.textContent = services[index].title;
    serviceDescription.textContent = services[index].description;
    serviceModal.classList.add("show");
    serviceModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

// Add click event to close button
const closeButton = document.querySelectorAll(".btn-close");
closeButton.forEach((button) => {
  button.addEventListener("click", () => {
    serviceModal.classList.remove("show");
    serviceModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
