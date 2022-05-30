let header = document.querySelector(".header");
let header_top = document.querySelector(".header_top");


window.onscroll = function(){
	let direction = window.pageYOffset;

	if(direction > "5"){
		header.classList.add("scroll");
		header_top.classList.add("scroll");
	}
	else {
		header.classList.remove("scroll");
	}

}

