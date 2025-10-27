// script.js

const menuToggleBtn = document.getElementById('menu-toggle');
const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');

if (menuToggleBtn && mobileDropdownMenu) {
    // Mobil Hamburger Menüyü Açma/Kapama
    menuToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        mobileDropdownMenu.classList.toggle('show');
    });

    // Menü dışına tıklayınca kapatma
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && mobileDropdownMenu.classList.contains('show')) {
            mobileDropdownMenu.classList.remove('show');
        }
    });

    // Menü içindeki linke tıklandığında menüyü kapat
    mobileDropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileDropdownMenu.classList.remove('show');
        });
    });
}


// İletişim Formu gönderme sonrası bilgilendirme
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Formspree gibi servisler için e.preventDefault() kaldırıldı.
        // Çünkü Formspree formun gönderimini devralıp kendi sayfasına yönlendiriyor.
        
        // Eğer Formspree'yi ayarladıysan bu alert'i kaldır:
        // alert('Mesajınız gönderiliyor... Formspree sayfasından sonra onay alacaksınız.');
        
        // Eğer Formspree/backend kullanmak istemiyorsan, sadece bilgilendirme için e.preventDefault() ve şu kodu kullan:
        /*
        e.preventDefault();
        alert('Mesajınız bize ulaştı! En kısa sürede geri dönüş yapılacaktır.');
        contactForm.reset();
        */
    });
}