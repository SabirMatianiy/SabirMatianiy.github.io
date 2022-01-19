// $(document).ready(function(){
// 	$(".header_burger").click(function(event){
// 		// debugger
// 		$(".header_burger, .header_menu, .header_list_internal, .header_menu_open").toggleClass("active");
// 		// debugger
// 	});
// 	$(".header_link").click(function(event){
// 		$(".header_menu").remove("active");
// 		$(".header_burger, .header_menu").toggleClass("active");
		
// 	})
// })

let header_burger = document.querySelector(".header_burger");
let header_menu = document.querySelector(".header_menu");
let header_body = document.querySelector(".header_body");
let header_menu_open = document.querySelector(".header_menu_open");
let header_menu_open_content = document.querySelector(".header_menu_open_content");
let header_menu_open_item = document.querySelectorAll(".header_menu_open_item");
let header_menu_open_text = document.querySelectorAll(".header_menu_open_text");


	header_burger.addEventListener("click", function(){

		document.body.classList.toggle("lock");

		header.classList.toggle("active");

		header_menu.classList.toggle("active");

		header_body.classList.toggle("scroll");

		header_burger.classList.toggle("active");

		header_menu_open.classList.toggle("active");

		header_menu_open_content.classList.toggle("active");


		for(let i = 0; i < header_menu_open_item.length; i++){
			header_menu_open_item[i].classList.toggle("active");
		}

		for(let i = 0; i < header_menu_open_text.length; i++){
			header_menu_open_text[i].classList.toggle("active");
		}
			
	});





 		



