document.addEventListener("DOMContentLoaded", function () {
    // Slide Otomatis pada Bagian Spanduk (Banner)
    let currentSlide = 0;
    const slides = document.querySelectorAll("#banner > div");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik

    // Validasi Formulir Kontak
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {
            event.preventDefault(); // Cegah pengiriman formulir jika ada kolom yang kosong
            alert("Harap isi semua kolom");
        }
    });
});
