/* ===========================
   MOBILE MENU
=========================== */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

// Buka / tutup menu
hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// Tutup menu setelah memilih salah satu menu
menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ===========================
   HERO SLIDER
=========================== */

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

const images = [

    "images/bg-1.jpg",
    "images/bg-2.png",
    "images/bg-3.jpg",

];

let current = 0;

bg1.style.backgroundImage = `url(${images[0]})`;

setInterval(()=>{

    current++;

    if(current >= images.length){

        current = 0;

    }

    bg2.style.backgroundImage = `url(${images[current]})`;

    bg2.style.opacity = 1;

    setTimeout(()=>{

        bg1.style.backgroundImage = bg2.style.backgroundImage;

        bg2.style.opacity = 0;

    },1800);

},6000);

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

function reveal() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* =====================================
   PRODUCT MODAL
===================================== */

const productData = {

    "product-1":{

        title:"Solar Panel 550Wp",

        image:"images/produk.jpg",

        desc:"Solar Panel 550Wp memiliki efisiensi tinggi, cocok untuk rumah, industri dan gedung perkantoran."

    },

    "product-2":{

        title:"Hybrid Inverter",

        image:"images/produk.jpg",

        desc:"Hybrid Inverter mampu mengubah listrik DC menjadi AC sekaligus menyimpan energi ke baterai."

    },

    "product-3":{

        title:"Battery Lithium",

        image:"images/produk.jpg",

        desc:"Battery Lithium digunakan sebagai penyimpanan energi agar listrik tetap tersedia saat malam hari."

    }

};

document.querySelectorAll(".product").forEach(card=>{

    card.addEventListener("click",()=>{

        const data = productData[card.id];

        if(!data) return;

        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modal-img");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-desc");

        modalImg.src = data.image;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        modal.classList.add("show");

    });

});

document.querySelector(".close").addEventListener("click",()=>{

    document.getElementById("modal").classList.remove("show");

});

document.getElementById("modal").addEventListener("click",(e)=>{

    if(e.target.id==="modal"){

        e.currentTarget.classList.remove("show");

    }

});

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function(e){

    e.stopPropagation();

    modal.classList.remove("show");

});

modal.addEventListener("click", function(e){

    if(e.target === modal){

        modal.classList.remove("show");

    }

});

/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryModal = document.getElementById("galleryModal");

const galleryImg = document.getElementById("galleryImg");

const galleryClose = document.querySelector(".gallery-close");

galleryItems.forEach(item => {

    item.addEventListener("click", function(){

        galleryModal.classList.add("show");

        galleryImg.src = this.src;

    });

});

galleryClose.addEventListener("click", function(){

    galleryModal.classList.remove("show");

});

galleryModal.addEventListener("click", function(e){

    if(e.target === galleryModal){

        galleryModal.classList.remove("show");

    }

});