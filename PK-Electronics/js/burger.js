

let header_burger = document.querySelector(".header_burger");
// console.log(header_burger);

let header_menu = document.querySelector(".header_menu");

let header_menu_open = document.querySelector(".header_menu_open");

let header_menu_open_content = document.querySelector(".header_menu_open_content");

let ul_menu = document.querySelector(".ul_menu");

let li = document.querySelectorAll(".li");

let close = document.querySelector(".close");


header_burger.addEventListener("click" , function(){
	// console.log(ul);
	header_menu.classList.toggle("active");
	header_menu_open.classList.toggle("active");
	header_menu_open_content.classList.toggle("active");
	ul_menu.classList.toggle("active");
	document.body.classList.toggle("close");
	
	for(let i = 0; i < li.length; i++){
		li[i].classList.toggle("active");
	}



})
