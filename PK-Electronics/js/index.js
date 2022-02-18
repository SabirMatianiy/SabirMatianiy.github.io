// let btn = document.querySelector(".icon");
// let src = document.querySelector(".search_js");
// src.style.display = "none";

// btn.onclick = function(){
// 	if(src.style.display == "block"){
// 		src.style.display = "none";
// 	}
// 	else{
// 		src.style.display = "block"
// 	}
// }



let btn_1 = document.querySelector(".button_message");
let valid = document.querySelector(".valid");
let valid_1 = document.querySelector(".valid_1");
let valid_2 = document.querySelector(".valid_2");
let valid_3 = document.querySelector(".valid_3");
let name = document.querySelector(".name_message");
let surname = document.querySelector(".surname_message");
let email = document.querySelector(".email_message");
let message = document.querySelector(".textarea");


btn_1.onclick = function(){
	
var reg_1 = /^[0-9]/.test(name.value);
var reg_2 = /^[0-9]/.test(surname.value);
var simvol = email.value.indexOf("@");


	if(name.value == ""){
		valid.innerHTML = "Это поле нужно заполнить";
		}
	if(name.value != ""){
		valid.innerHTML = "";
	}
	if(reg_1 === true){
		valid.innerHTML = "Ведите имя буквами"
		return false;
	}
	if(surname.value == ""){
		valid_1.innerHTML = "Это поле нужно заполнить";
	}
	if(surname.value != ""){
		valid_1.innerHTML = "";
	}
	if(reg_2 === true){
		valid_1.innerHTML = "Ведите фамилию буквами";
		return false;
	}
	if(email.value == ""){
		valid_2.innerHTML = "Это поле нужно заполнить";
		return false
	}
	else{
		valid_2.innerHTML = "";
	}
	if(email.value.indexOf(".") == -1){
		valid_2.innerHTML = "Нет символа\".\"";
		return false
	}
	if(email.value.indexOf(",")>=0 || (email.value.indexOf(";")>=0) || (email.value.indexOf(" ")>=0)){
		valid_2.innerHTML = "Не правильно вели mail"
		return false
	}
	if(simvol == -1){
		valid_2.innerHTML = "Нет символа\"@\".";
		return false
	}
	if((simvol < 1) || (simvol > email.value.length - 5))	{
		valid_2.innerHTML = "Адрес электронной почты был веден не правильно"
		return false
	}
	if((email.value.charAt(simvol - 1) == ".") || (email.value.charAt(simvol + 1) == ".")){
		valid_2.innerHTML = "Адрес электронной почты веден не правильно"
		return false
	}
		if(message.value == ""){
		valid_3.innerHTML = "Введите текст"
	}
	if(message.value == ""){
		valid_3.innerHTML = "Введите текст"
		return false
	}
	else{
		valid_3.innerHTML = "";
	}
}

