
 let form = document.querySelectorAll("form");

 let arrow_forms = document.querySelectorAll('input[type="radio"]');
 
let form_submission = document.querySelector(".form_submission");

 let range = document.querySelector(".range_track > input");

 let input = document.querySelector(".maxproff_section_calculation_repair_phone_input_block > input");

 let repair = document.querySelector(".form_submission_body > p > span");

 let real_estate = document.querySelector(".form_submission_body > p:nth-child(2) > span");

 let rooms = document.querySelector(".form_submission_body > p:nth-child(3) > span");

 let area = document.querySelector(".form_submission_body > p:nth-child(4) > span");

 let num_phone = document.querySelector(".form_submission_body > p:nth-child(5) > span");

 let term = document.querySelector(".form_submission_body > p:nth-child(6) > span");

 let discount = document.querySelector(".form_submission_body > p:nth-child(7) > span");

 let itog_sum = document.querySelector(".form_submission_body > p:nth-child(8) > span");

for(let q = 0; q < form.length; q++){
 form[q].addEventListener("submit", function(event) {

    for(let i = 0; i < arrow_forms.length; i++){
      if(arrow_forms[i].checked){
         for(let e = 0; e < 4; e++){
            if(arrow_forms[e].checked){
               repair.innerHTML = arrow_forms[e].value;
            }
         }
         for(let j = 4; j < 6; j++){
             if(arrow_forms[j].checked){
               real_estate.innerHTML = arrow_forms[j].value
             }
          }
         for(let a = 7; a < 10; a++){
            if(arrow_forms[a].checked){
                rooms.innerHTML = arrow_forms[a].value
            }
         } 
          area.innerHTML = `<p class="form_submission_body_text">Площадь, м2: <span>${range.value}</span></p>`;
          num_phone.innerHTML = `<p class="form_submission_body_text">Введите номер телефона <span>${input.value}</span></p>`;

          form_submission.classList.add("form");
          body.classList.add("lock");

            if(form_submission.classList.contains("form")){
               body.onclick = function(){
                  form_submission.classList.remove("form")
                  body.classList.remove("lock");
               }
            }
         }

         term.innerHTML = `<p class="form_submission_body_text">Срок ремонта:<span> до ${range_calculate.textContent} дней</span></p>`;
         discount.innerHTML = `<p class="form_submission_body_text">Скидка составит:<span> ${range_summ.textContent} руб</span></p>`;
         itog_sum.innerHTML = `<p class="form_submission_body_text">Общая сумма составит <span>${range_slider.value * 1200}</span></p>`;

         term.innerHTML = `<p class="form_submission_body_text">Срок ремонта:<span> до ${range_calculateTab.textContent} дней</span></p>`;
         discount.innerHTML = `<p class="form_submission_body_text">Скидка составит:<span> ${discountTab.textContent} руб</span></p>`;
         num_phone.innerHTML = `<p class="form_submission_body_text">Введите номер телефона <span>${phoneTab.value}</span></p>`;
         itog_sum.innerHTML = `<p class="form_submission_body_text">Общая сумма составит <span>${range_slider_tab.value * 1200}</span></p>`

         term.innerHTML = `<p class="form_submission_body_text">Срок ремонта:<span> до ${range_number_track_tab_mobile.textContent} дней</span></p>`;
         discount.innerHTML = `<p class="form_submission_body_text">Скидка составит:<span> ${discountTabMob.textContent} руб</span></p>`;
         num_phone.innerHTML = `<p class="form_submission_body_text">Введите номер телефона <span>${input_mobi.value}</span></p>`;
         itog_sum.innerHTML = `<p class="form_submission_body_text">Общая сумма составит <span>${range_slider_tab_mobile.value * 1200}</span></p>`

   }

   event.preventDefault();
   }, false);
}
  
 let range_slider = document.querySelector(".range_slider");

 let range_number_track = document.querySelector(".range_number_track");

 let range_calculate = document.querySelector(".maxproff_section_calculation_repair_time_content_text_body > span");

 let range_summ = document.querySelector(".maxproff_section_calculation_repair_time_content:nth-child(2) > p:nth-child(2) > span");

 class SliderRange {

   constructor(){
      this.range_slider = range_slider
      this.range_number_track = range_number_track
      this.range_calculate = range_calculate
      this.range_summ = range_summ
      this.options = options

      this.range_slider.addEventListener("input" , this.sliderBackRange.bind(this))
   }

   init(){
      this.range_slider.setAttribute("min" , options.min)
      this.range_slider.setAttribute("max" , options.max)
  
      this.sliderBackRange()
   }
   backgroundFunction(){

      let color =  (this.range_slider.value - this.options.min) / (this.options.max - this.options.min) * 100
      return 'background: linear-gradient(to right, #2D4872,' + color + '%, #D1D1D1 ' + color + '%, #D1D1D1)'

   }   

   sliderBackRange(){

      this.range_slider.style = this.backgroundFunction(this.range_slider.value)
      this.range_number_track.innerHTML = range_slider.value
      this.range_calculate.innerHTML = range_slider.value
      this.range_summ.innerHTML = range_slider.value * 679
      if(range_slider.value <= 0){
         range_calculate.innerHTML = 0;
      }
      let raiper_capital = document.querySelector(".maxproff_section_calculation_radio_block:nth-child(2) > input");
      let full_construction = document.querySelector(".maxproff_section_calculation_radio_row:nth-child(2) > .maxproff_section_calculation_radio_block:nth-child(1) > input");
      let design = document.querySelector(".maxproff_section_calculation_radio_row:nth-child(2) > .maxproff_section_calculation_radio_block:nth-child(2) > input");
      let new_bulding = document.querySelector(".maxproff_section_calculation_real_estate_block > input:nth-child(1)");

         if(raiper_capital.checked && range_slider.value >= 20){
            this.range_calculate.innerHTML = range_slider.value - 10;
            this.range_summ.innerHTML = range_slider.value * 700;
         }
         if(full_construction.checked && range_slider.value >= 20){
            this.range_calculate.innerHTML = range_slider.value - 15;
            this.range_summ.innerHTML = range_slider.value * 800;
         }
   }
}
   let options = {

      min: 0,
      max: 300
   }

if (range_slider){

   let sliderRange = new SliderRange()

   sliderRange.init()
}

let range_slider_tab = document.querySelector(".range_slider_tab");   
let range_number_track_tab = document.querySelector(".range_number_track_tab");
let range_calculateTab = document.querySelector(".maxproff_section_calculation_repair_time_content_text_body_tab > span");
let discountTab = document.querySelector(".tab > .tab_text > span");
let capitalTab = document.querySelector(".capitalTab");
let full_constructionTab = document.querySelector(".full_constructionTab");
let designTab = document.querySelector(".designTab");
let cosmeticsTab = document.querySelector(".cosmeticsTab");
let new_buildingTab = document.querySelector(".new_buildingTab");
let old_buildingTab = document.querySelector(".old_buildingTab");
let rooms_btn = document.querySelectorAll(".maxproff_section_calculation_rooms_block > input");
let phoneTab = document.querySelector(".inputTab");

class SliderRangeTab {
   constructor(){
      this.range_slider_tab = range_slider_tab
      this.range_number_track_tab = range_number_track_tab
      this.range_calculateTab = range_calculateTab
      this.discountTab = discountTab
      this.capitalTab = capitalTab
      this.optionsTab = optionsTab

      this.range_slider_tab.addEventListener("input" , this.sliderBackRangeTab.bind(this))
   }
   linit(){
      this.range_slider_tab.setAttribute("min" , optionsTab.min)
      this.range_slider_tab.setAttribute("max" , optionsTab.max)
  
      this.sliderBackRangeTab()
   }
    backgroundFunctionTab(){

      let colorTab =  (this.range_slider_tab.value - this.optionsTab.min) / (this.optionsTab.max - this.optionsTab.min) * 100
      return 'background: linear-gradient(to right, #2D4872,' + colorTab + '%, #D1D1D1 ' + colorTab + '%, #D1D1D1)'

   }   
   sliderBackRangeTab(){
      this.range_slider_tab.style = this.backgroundFunctionTab(this.range_slider_tab.value)

      this.range_number_track_tab.innerHTML = range_slider_tab.value;
      this.range_calculateTab.innerHTML = range_slider_tab.value;
      this.discountTab.innerHTML = range_slider_tab.value * 679;

      if(capitalTab.checked && range_slider_tab.value >= 20){
         this.range_calculateTab.innerHTML = range_slider_tab.value - 10;
         this.discountTab.innerHTML = range_slider_tab.value * 700;
         repair.innerHTML = capitalTab.value;
      }
      if(full_constructionTab.checked && range_slider.value >= 20){
         this.range_calculateTab.innerHTML = range_slider_tab.value -15
         this.discountTab.innerHTML = range_slider_tab.value * 900
         repair.innerHTML = full_constructionTab.value;
      }
      if(designTab.checked){
         repair.innerHTML = designTab.value;
      }
      if(cosmeticsTab.checked){
         repair.innerHTML = cosmeticsTab.value;
      }
      if(new_buildingTab.checked){
         real_estate.innerHTML = new_buildingTab.value;
      }
      if(old_buildingTab.checked){
         real_estate.innerHTML = old_buildingTab.value;
      }
      for(let i = 0; i < rooms_btn.length; i++){
         if(rooms_btn[i].checked){
            rooms.innerHTML = rooms_btn[i].value
         }
      }
   }

}
 let optionsTab = {

      min: 0,
      max: 300
   }
   
   if(range_slider_tab){
      let sliderRangeTab = new SliderRangeTab()

      sliderRangeTab.linit()
   }


let range_slider_tab_mobile = document.querySelector(".range_slider_tab_mobile");   
let range_number_track_tab_mobile = document.querySelector(".range_number_track_tab_mobile");
let range_calculateTabMob = document.querySelector(".TabMobText > span");
let discountTabMob = document.querySelector(".TabMobTextDisc > span");
let cosmeticsMob = document.querySelector(".cosmeticsMob");
let capitalMob = document.querySelector(".capitalMob");
let full_constructionMob = document.querySelector(".full_constructionMob");
let designMob = document.querySelector(".designMob");
let new_buildingMob = document.querySelector('.new_buildingMob');
let old_buildingMob = document.querySelector(".old_buildingMob");
let rooms_mobi = document.querySelectorAll(".rooms_mobi > input");
let input_mobi = document.querySelector(".input_mobi");

class SliderRangeTabMob {
   constructor(){
      this.range_slider_tab_mobile = range_slider_tab_mobile
      this.range_number_track_tab_mobile = range_number_track_tab_mobile
      this.range_calculateTabMob = range_calculateTabMob
      this.discountTabMob = discountTabMob
      this.optionsTabMob = optionsTabMob

      this.range_slider_tab_mobile.addEventListener("input" , this.sliderBackRangeTabMob.bind(this))
   }
   linit(){
      this.range_slider_tab_mobile.setAttribute("min" , optionsTabMob.min)
      this.range_slider_tab_mobile.setAttribute("max" , optionsTabMob.max)
  
      this.sliderBackRangeTabMob()
   }
    backgroundFunctionTabMob(){

      let colorTab =  (this.range_slider_tab_mobile.value - this.optionsTabMob.min) / (this.optionsTabMob.max - this.optionsTabMob.min) * 100
      return 'background: linear-gradient(to right, #2D4872,' + colorTab + '%, #D1D1D1 ' + colorTab + '%, #D1D1D1)'

   }   
   sliderBackRangeTabMob(){
      this.range_slider_tab_mobile.style = this.backgroundFunctionTabMob(this.range_slider_tab_mobile.value)

      this.range_number_track_tab_mobile.innerHTML = range_slider_tab_mobile.value;
      this.range_calculateTabMob.innerHTML = range_slider_tab_mobile.value;
      this.discountTabMob.innerHTML = range_slider_tab_mobile.value * 700;
      if(cosmeticsMob.checked){
         repair.innerHTML = cosmeticsMob.value;
      }
      if(capitalMob.checked){
         repair.innerHTML = capitalMob.value;
      }
      if(full_constructionMob.checked){
         repair.innerHTML = full_constructionTab.value;
      }
      if(designMob.checked){
         repair.innerHTML = designMob.value;
      }
      if(new_buildingMob.checked){
         real_estate.innerHTML = new_buildingMob.value;
      }
      if(old_buildingMob.checked){
         real_estate.innerHTML = old_buildingMob.value;
      }
      for(let i = 0; i < rooms_mobi.length; i++){
         if(rooms_mobi[i].checked){
            rooms.innerHTML = rooms_mobi[i].value;
         }
      }
   }

}
 let optionsTabMob = {

      min: 0,
      max: 300
   }
   
   if(range_slider_tab_mobile){
      let sliderRangeTabMob = new SliderRangeTabMob()

      sliderRangeTabMob.linit()
   }
