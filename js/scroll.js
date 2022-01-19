

let header = document.querySelector(".header");
// let header_menu = document.querySelector(".header_menu");
let header_body_scroll = document.querySelector(".header_body");
let scroll_div_3 = document.querySelector(".sbis_3_block_3_section_2");
let scroll_div_4 = document.querySelector(".sbis_3_block_3_section_3");
let scroll_div_5 = document.querySelector(".sbis_3_block_3_section_4");
let scroll_div_6 = document.querySelector(".div_3");
let scroll_div_7 = document.querySelector(".div_4");
let scroll_div_8 = document.querySelector(".div_5");
let scroll_div_9 = document.querySelector(".div_6");
let scroll_div_10 = document.querySelector(".sbis_3_block_3_article_0");
let scroll_div_11 = document.querySelector(".sbis_3_block_3_article_0_1");

window.onscroll = function(){
	let scrolled_1 = window.pageYOffset;
	console.log("позиция скpолла:" + scrolled_1);

    if(scrolled_1 > "10"){
		header_body_scroll.classList.add("active");
		console.log(header_body_scroll);
		header.classList.add("active");
		console.log(header);
		header_menu.classList.add("scroll");
		console.log(header_menu);
	}
	else{
		header_body_scroll.classList.remove("active");
		header.classList.remove("active");
		header_menu.classList.remove("active");
	}
	
	if(scrolled_1 > "1000"){
		scroll_div_6.style.display = "block";
		scroll_div_7.style.display = "block";
		setTimeout(onscroll_1, 100);
		setTimeout(onscroll_block, 1000);
		setTimeout(onscroll_2, 1000);
		setTimeout(onscroll_block_1, 2000);
		setTimeout(onscroll_3, 2000);
		// alert("work");
		// console.log("work");
		// console.log("позиция скролла:" + scrolled_1);
	}
	if(scroll_div_6.style.display == "block"){
		setTimeout(onblock, 500);
		setTimeout(block_4, 300);
		function onblock(){
			scroll_div_8.style.display = "block";
			scroll_div_9.style.display = "block";
		}
		function block_4(){
			scroll_div_5.style.backgroundImage = "url(image/operatop.png)";
			scroll_div_5.style.paddingLeft = "14px";
		}
		
	}
	
}
window.onscroll_1 = function(){
			scroll_div_3.classList.add("active");
			scroll_div_6.classList.add("active");
			scroll_div_7.classList.add("active");
}
window.onscroll_block = function(){
	scroll_div_10.style.display = "flex";
}
window.onscroll_block_1 = function(){
	scroll_div_11.style.display = "flex";
}
window.onscroll_2 = function(){
		scroll_div_4.classList.add("active");
		scroll_div_8.classList.add("active");
		scroll_div_9.classList.add("active");
}	
window.onscroll_3 = function(){
		scroll_div_5.classList.add("active");

}