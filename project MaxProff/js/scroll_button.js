
let scroll_button = document.querySelector(".scroll_button");

let maxproff_section_work_examples = document.querySelector(".maxproff_section_work_examples");

let scroll_button_body = document.querySelector(".scroll_button_body");

scroll_button.style.display = "none";


window.addEventListener("scroll" , function(){

	if(document.documentElement.scrollTop > 1500){

		scroll_button.style.display = "block";
	}
	else{

		scroll_button.style.display = "none";

	}
	if(document.documentElement.scrollTop < 1500 && scroll_button.classList.contains("btn")){

		scroll_button_body.style.transform = "rotate(180deg)";
	}
	else{

		scroll_button_body.style.transform = "rotate(0deg)"
	}

})


scroll_button.addEventListener("click" , function(){

	if("click"){

		scroll_button.classList.add("btn");

		// flashing()

	}
	if(scroll_button_body.style.transform == "rotate(180deg)" && "click"){

		let htmlHeight = document.documentElement.scrollHeight;

			scrollTo(pageXOffset, htmlHeight);

	}
	if(scroll_button_body.style.transform == "rotate(0deg)" && "click"){

		document.documentElement.scrollTop = 0;

	}

})


// function flashing(){
// 	if(scroll_button_body.style.backgroundColor == "red"){

// 		scroll_button_body.style.backgroundColor = "blue";
// 	}
// 	else{
// 		scroll_button_body.style.backgroundColor = "red";
// 	}
// 	setTimeout(flashing, 500)
// }

