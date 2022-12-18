
let header_burger = document.querySelector(".header_burger");

let header_menu = document.querySelector(".header_menu");

let header_menu_content = document.querySelector(".header_menu_content");

let header_menu_close = document.querySelector(".header_menu_close");

// let scroll_button = document.querySelector(".scroll_button");


let body = document.querySelector("body");


header_burger.addEventListener("click" , function(){

	header_menu.classList.add("menu");

	header_menu_content.classList.toggle("menu");

	body.classList.toggle("lock");

	scroll_button.style.cssText = "display:none !important";

});

header_menu_close.onclick = function(){

	header_menu.classList.remove("menu");

	body.classList.remove("lock");
}