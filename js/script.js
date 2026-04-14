

/* ================= MOBILE MENU + HAMBURGER ================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const lines = document.querySelectorAll(".line");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;

  // MENU SLIDE
  mobileMenu.classList.toggle("translate-x-full");

  // HAMBURGER → CROSS ANIMATION
  if (menuOpen) {
    lines[0].classList.add("rotate-45", "translate-y-2");
    lines[1].classList.add("opacity-0");
    lines[2].classList.add("-rotate-45", "-translate-y-2");
  } else {
    lines[0].classList.remove("rotate-45", "translate-y-2");
    lines[1].classList.remove("opacity-0");
    lines[2].classList.remove("-rotate-45", "-translate-y-2");
  }
});


const s=document.querySelectorAll('.packet'),
d=document.querySelectorAll('.dot');
let i=0;

function show(n){
 s.forEach((x,k)=>{
  x.className='packet absolute inset-0 flex items-center justify-center lg:justify-end opacity-0 scale-75 transition-all duration-700 ease-in-out';

  if(k==n)
   x.classList.add('opacity-100','scale-100','z-40');

  d[k].classList.toggle('h-8',k==n);
  d[k].classList.toggle('bg-white',k==n);
  d[k].classList.toggle('bg-white/40',k!=n);
 });
}

d.forEach((x,k)=>x.onmouseenter=()=>show(i=k));

setInterval(()=>show(i=++i%s.length),2500);

show(0);