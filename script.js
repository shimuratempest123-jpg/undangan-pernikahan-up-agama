// Inisialisasi Animasi AOS
AOS.init({
    duration: 1000,
    once: false
});

function openUndangan() {
    // Putar Musik
    const music = document.getElementById('bgMusic');
    music.play().catch(error => console.log("Musik butuh interaksi user"));

    // Scroll ke Konten
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ behavior: 'smooth' });
}
// SET TANGGAL ACARA: 13 Februari 2026
const weddingDate = new Date("February 13, 2026 09:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Kalkulasi Waktu (Hari, Jam, Menit, Detik)
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update elemen HTML (pastikan ID sesuai dengan yang ada di index.html)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Jika waktu sudah tercapai atau lewat
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<h3 style='color: #d4af37;'>ACARA SEDANG BERLANGSUNG</h3>";
    }
}, 1000);
