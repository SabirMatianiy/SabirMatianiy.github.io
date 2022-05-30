let signy_section_question_content_text = document.querySelectorAll(".signy_section_question_content_text");

let signy_section_question_content_img = document.querySelectorAll(".signy_section_question_content_img");

let signy_section_question_content_spoiler = document.querySelectorAll(".signy_section_question_content_spoiler");

for(let i = 0; i < signy_section_question_content_text.length; i++) {
	signy_section_question_content_text[i].addEventListener("click" , function(e){
		e.target.classList.toggle("spoiler");
		signy_section_question_content_img[i].classList.toggle("spoiler");
		signy_section_question_content_spoiler[i].classList.toggle("spoiler");
	})
}
