// toggle icon navbar

let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon  & navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading ',{origin: 'top'});
ScrollReveal().reveal('.home-img,.skills-section,.projects,.contact form',{origin: 'button'});
ScrollReveal().reveal('.home-content h1 ',{origin: 'left'});
ScrollReveal().reveal('.home-content p ,contact h2',{origin: 'right'});

// typed js
const typed = new Typed('.change',{
    strings: ['Software Developer','FullStack Developer','Competitive Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyd4fDKLzPLXsatzyWJMLcFTZuBR9bRiOpT9qn6-nPKly0G5-6XgobBS7NtX9WUxj_o/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
