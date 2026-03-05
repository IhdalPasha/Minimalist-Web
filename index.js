/* ================= MOBILE MENU ================= */
const toggle = document.getElementById("mobile-menu-toggle");
const overlay = document.getElementById("mobile-menu-overlay");
const menu = document.getElementById("mobile-menu");
const html = document.documentElement;

function toggleMenu() {
    const isActive = menu.classList.toggle("active");
    overlay.classList.toggle("active");
    toggle.classList.toggle("active");

    if (isActive) {
        // Gunakan "hidden", bukan "none"
        html.style.overflow = "hidden";
        // Tambahkan ini agar halaman tidak bergeser ke kanan saat scrollbar hilang
        html.style.paddingRight = (window.innerWidth - html.clientWidth) + "px";
    } else {
        html.style.overflow = "";
        html.style.paddingRight = "";
    }
}

toggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Tutup menu jika link diklik (opsional tapi disarankan)
document.querySelectorAll(".mobile-menu-item").forEach(link => {
    link.addEventListener("click", () => {
        if(menu.classList.contains("active")) toggleMenu();
    });
});

/* ================= CARD IMAGE ANIMATION ================= */
const animatedImages = document.querySelectorAll(".animated-img");

const imageObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.1 } // Turunkan threshold agar lebih sensitif di mobile
);

animatedImages.forEach(img => imageObserver.observe(img));