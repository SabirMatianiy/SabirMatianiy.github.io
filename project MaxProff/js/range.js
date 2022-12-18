var range_slider = document.querySelector(".range_slider");
var range_number_track = document.querySelector(".range_number_track");

 range_slider.addEventListener("input" , function(){
	 div = document.querySelector(".range_band");
	 div.style.width = range_slider.value + "%";
     range_number_track.innerHTML = range_slider.value;
 });

 let range_slider_tab = document.querySelector(".range_slider_tab");
 let range_band_tab = document.querySelector(".range_band_tab");
 let range_number_track_tab = document.querySelector(".range_number_track_tab");

 range_slider_tab.oninput = function(){
 	range_band_tab.style.width = range_slider_tab.value + "%";
    range_number_track_tab.innerHTML = range_slider_tab.value;
  }

 let range_slider_tab_mobile = document.querySelector(".range_slider_tab_mobile");
 let range_band_slider_tab_mobile = document.querySelector(".range_band_slider_tab_mobile");
 let range_number_track_tab_mobile = document.querySelector(".range_number_track_tab_mobile");
    range_slider_tab_mobile.addEventListener("input" , function(){
        range_band_slider_tab_mobile.style.width = range_slider_tab_mobile.value + "%";
        range_number_track_tab_mobile.innerHTML = range_slider_tab_mobile.value;

    })


 let range_slider_mobile = document.querySelector(".range_slider_mobile");
 let range_band_slider_mobile = document.querySelector(".range_band_slider_mobile");
 let range_number_track_mobile = document.querySelector(".range_number_track_mobile");
 
 range_slider_mobile.oninput = function(){
 	range_band_slider_mobile.style.width = range_slider_mobile.value + "%";
    range_number_track_mobile.innerHTML = range_slider_mobile.value;
  }

 
      