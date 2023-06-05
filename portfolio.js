let navbar = document.querySelector('.navbar');
let menus = document.querySelector('#menu-bar');



menus.addEventListener("click", () =>{
    menus.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  
});

