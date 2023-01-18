
let btn_tabs = document.querySelectorAll(".maxproff_section_work_examples_hover_list > li");

let slider_1 = document.querySelector(".maxproff_section_work_examples_slider_horizontal:nth-child(4)");

let slider_2 = document.querySelector(".maxproff_section_work_examples_slider_horizontal:nth-child(5)");

let slider_3 = document.querySelector(".maxproff_section_work_examples_slider_horizontal:nth-child(6)");

let slider_4 = document.querySelector(".maxproff_section_work_examples_slider_horizontal:nth-child(7)");

let slider_5 = document.querySelector(".maxproff_section_work_examples_slider_horizontal:nth-child(8)");

let masiv = document.querySelectorAll(".maxproff_section_work_examples_slider_horizontal");

// console.log(masiv) 


for(let i = 0; i < btn_tabs.length; i++){

	btn_tabs[i].onclick = function(){ 

			if(btn_tabs[0] == btn_tabs[i]){

				slider_1.style.display = "flex";

				slider_2.style.display = "none";

				slider_3.style.display = "none";

				slider_4.style.display = "none";

				slider_5.style.display = "none";
			}
			if(btn_tabs[1] == btn_tabs[i]){

				slider_1.style.display = "none";

				slider_3.style.display = "none";

				slider_4.style.display = "none";

				slider_5.style.display = "none";

				slider_2.style.display = "flex";

			}
			if(btn_tabs[2] == btn_tabs[i]){

				slider_1.style.display = "none";

				slider_2.style.display = "none";

				slider_4.style.display = "none";

				slider_5.style.display = "none";

				slider_3.style.display = "flex";
			}
			if(btn_tabs[3] == btn_tabs[i]){

				slider_1.style.display = "none";

				slider_2.style.display = "none";

				slider_3.style.display = "none";

				slider_5.style.display = "none";

				slider_4.style.display = "flex";
			}
			if(btn_tabs[4] == btn_tabs[i]){

				slider_1.style.display = "none";

				slider_2.style.display = "none";

				slider_3.style.display = "none";

				slider_4.style.display = "none";

				slider_5.style.display = "flex";
			}
			
	}
}

