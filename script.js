
    
// scroll sections
window.onscroll = () =>{
    // Sticky header

    let navbar = document.querySelector('navbar');

    navbar.classList.toggle('sticky',window.scrollY > 100);


}