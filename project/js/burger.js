let body = document.querySelector("body");
let header_burger = document.querySelector(".header_burger");
let header_menu = document.querySelector(".header_menu");
let header_menu_open_logo_close = document.querySelector(".header_menu_open_logo_close");

		header_burger.addEventListener("click" , function(){

			body.classList.add("lock");

			header_burger.classList.add("delete");

			header_menu.classList.add("active");

});

header_menu_open_logo_close.onclick = function(){

	header_menu.classList.remove("active");

	header_burger.classList.remove("delete");

	body.classList.remove("lock");

	
}
let header_menu_open_phone_nomber_mobile = document.querySelectorAll(".header_menu_open_phone_nomber_mobile");
let header_list_link_arrow_mobile = document.querySelectorAll(".header_list_link_arrow_mobile");
let header_menu_open_phone_nomber_mobile_spoier = document.querySelectorAll(".header_menu_open_phone_nomber_mobile_spoier");
// console.log(header_menu_open_phone_nomber_mobile);
// header_menu_open_phone_nomber_mobile.onclick = function(){
// 	header_list_link_arrow_mobile.classList.toggle("open");
// 	header_menu_open_phone_nomber_mobile_spoier.classList.toggle("open");

// }			
			for(let i = 0; i < header_menu_open_phone_nomber_mobile.length; i++){
				header_menu_open_phone_nomber_mobile[i].addEventListener("click" , function(){
				  this.classList.toggle("open");
				  header_list_link_arrow_mobile[i].classList.toggle("open");
				  header_menu_open_phone_nomber_mobile_spoier[i].classList.toggle("open");

				  console.log(header_menu_open_phone_nomber_mobile[i])
				})
			}

