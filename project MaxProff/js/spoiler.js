
let maxproff_section_questions_body_list = document.querySelectorAll(".maxproff_section_questions_body_list > li");

let maxproff_section_questions_body_list_box_img = document.querySelectorAll(".maxproff_section_questions_body_list_box > img");

let maxproff_section_questions_body_list_text = document.querySelectorAll(".maxproff_section_questions_body_list_text");

let maxproff_section_questions_body_list_spoiler = document.querySelectorAll(".maxproff_section_questions_body_list_spoiler");

let maxproff_section_questions_body_list_box = document.querySelectorAll(".maxproff_section_questions_body_list_box");

for(let i = 0; i < maxproff_section_questions_body_list.length; i++) {

	maxproff_section_questions_body_list[i].addEventListener("click" , function(){

        for(let e = 0; e < maxproff_section_questions_body_list_spoiler.length; e++){

            let content = maxproff_section_questions_body_list_spoiler[e].classList;

            let textColor = maxproff_section_questions_body_list_text[e].classList;

            let icon = maxproff_section_questions_body_list_box[e].classList;

            let iconColor = maxproff_section_questions_body_list_box[e].classList

            let iconColorDel = maxproff_section_questions_body_list_box[e].classList;

            if(i == e){

                content = content.contains("spoiler") ? content.remove("spoiler") : content.add("spoiler");

                textColor = textColor.contains("spoiler") ? textColor.remove("spoiler") : textColor.add("spoiler");

                iconColor = iconColor.contains("color") ? iconColor.remove("color") : setTimeout(CoLor, 500);

                iconColorDel = iconColorDel.contains("delet") ? iconColorDel.remove("delet") : setTimeout(IconDel, 500);

                icon = icon.contains("spoiler") ? setTimeout(iconRem, 400) : icon.add("spoiler");

               } else{
                content.remove("spoiler");

                textColor.remove("spoiler");

                 setTimeout(()=> icon.remove("spoiler"), 500);

                 setTimeout(()=> iconColor.remove("color"));

                 setTimeout(()=> iconColorDel.remove("delet"), 500);
             }
            function CoLor(){
                maxproff_section_questions_body_list_box[e].classList.add("color");
            }
            function iconRem(){
                maxproff_section_questions_body_list_box[e].classList.remove("spoiler");
            }
            function IconDel(){
                maxproff_section_questions_body_list_box[e].classList.add("delet");
            }
       }
    })

}

let header_menu_list = document.querySelectorAll(".header_menu_list > li");

let header_menu_list_img = document.querySelectorAll(".header_menu_list > li > img");

let header_menu_list_spoiler = document.querySelectorAll(".header_menu_list_spoiler");

for(let i = 0; i < header_menu_list.length; i++){

    header_menu_list[i].addEventListener("click" , function(){

        for(let e = 0; e < header_menu_list_spoiler.length; e++){

            let spoiler_img = header_menu_list_img[e].classList;

            let spoiler_content = header_menu_list_spoiler[e].classList;

            if(i == e) {
                
                spoiler_content.contains("menu") ? spoiler_content.remove("menu") : spoiler_content.add("menu");

                spoiler_img.contains("menu") ? spoiler_img.remove("menu") : spoiler_img.add("menu");

            }

        }
    })
}


