let sbis_arrow = document.querySelectorAll(".sbis_arrow");

let sbis_footer_spoiler = document.querySelectorAll(".sbis_footer_content_item_link_block_spoiler");


for(let i = 0; i < sbis_arrow.length; i++){
	sbis_arrow[i].addEventListener("click" , function(e){
		e.target.classList.toggle("spoiler");
		sbis_footer_spoiler[i].classList.toggle("spoiler");
	})
}




