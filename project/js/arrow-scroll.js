let signy_section_footer_arrow_scroll = document.querySelector(".signy_section_footer_arrow_scroll");

console.log(signy_section_footer_arrow_scroll);

signy_section_footer_arrow_scroll.onclick = function() {
	window.scrollTo(pageXOffset, 0);
}
