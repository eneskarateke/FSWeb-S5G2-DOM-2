import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

// document.querySelector("h1").addEventListener("click", e => {
//     alert("Bana tıkladın!")
//     });

  const anasayfaLink = document.querySelectorAll('.nav-link');
  anasayfaLink.forEach(link => {
    link.addEventListener('dblclick', (event) => {
    event.preventDefault();
    window.open(link.href, '_blank');
  });})



  anasayfaLink.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.fontWeight = "bold"; 
    });
    link.addEventListener("mouseout", () => {
      link.style.fontWeight = "normal"; });
  });

  

const resimler = document.getElementsByTagName("img");

for (let i = 0; i < resimler.length; i++) {
  resimler[i].addEventListener("mouseenter", event => {
    const img = event.target;
    img.style.transition = "1s";
    img.style.transform = "scale(1.3)";
  });

  resimler[i].addEventListener("mouseleave", event => {
    const img = event.target;
    img.style.transform = "scale(1)";
      });
    }




const butonlar = document.querySelectorAll(".btn");

butonlar.forEach(btn => {   
btn.addEventListener("click", event => {
  alert("Seni almamı istediğime emin misin???!")
  })

btn.addEventListener("mouseenter", event =>{
  event.target.style.background ="yellow";
  event.target.style.color ="black";
} )

btn.addEventListener("mouseleave", event =>{
  event.target.style.background ="";
  event.target.style.color ="";
} )

});





