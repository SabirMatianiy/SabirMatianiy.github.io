
let header = document.querySelector(".header");

let header_pop_up_menu = document.querySelector(".header_pop_up_menu");

let header_pop_up_menu_list = document.querySelector(".header_pop_up_menu_list");

let header_information = document.querySelector(".header_information");

let header_body = document.querySelector(".header_body");

window.addEventListener("scroll" , function(){

	let scroll_header = window.pageYOffset;

	let header_menu = header_pop_up_menu.style;
	
	if(scroll_header > 50){
		
		header.style.paddingTop = '10px';

		header_pop_up_menu.style.height = "0px";

		header_pop_up_menu.style.marginTop = '0px'

		header_pop_up_menu.style.border = "0px"

		header_pop_up_menu.style.overflow = "hidden";

		header_pop_up_menu.style.height == "0px" ? header_pop_up_menu.style.overflow = "hidden" : header_pop_up_menu.style.overflow = "visible";

		header.style.borderBottom = "1px solid rgba(108, 172, 61, 1)";

		header_body.style.paddingBottom = "10px";

		// header_body.style.paddingBottom = "5px";

	}

	else{

		header_pop_up_menu.style.height = "67px"

		header.style.paddingTop = "23px";

		header_pop_up_menu.style.marginTop = "23px";

		header_pop_up_menu.style.borderTop = "1px solid rgba(108, 172, 61, 1)";

		header_pop_up_menu.style.borderBottom = "1px solid rgba(108, 172, 61, 1)";

		header.style.borderBottom = "0px";

		header_information.style.height = "37px";

		header_information.style.borderTop = "1px solid rgba(108, 172, 61, 1)";

	}
	if(scroll_header > 100){

		setTimeout(()=> header_information.style.height = "0px", 0);

		header_information.style.borderTop = '0px'; 

		header_information.style.marginTop = "0px"

		header_information.style.height == "0px" ? header_information.style.overflow = "hidden" : header_information.style.overflow = "visible";
	}

})

		header_pop_up_menu.addEventListener("mouseover" , function(e){

			if(e.type == "mouseover"){

						header_pop_up_menu.style.overflow = "visible"

					}

				})

		header_pop_up_menu.onmouseout = function(e){
			
			if(e.type == "mouseout"){

				header_pop_up_menu.style.overflow = 'hidden';

			}
		}

