let btn = document.querySelector("button");
let out = document.querySelector("#out");

btn.addEventListener("click" , function(){

	let url = "https://jsonplaceholder.typicode.com/users";

	
	fetch(url)
	.then(response => {
		if(response.status === 200){
		return	response.json();
		}
		else{
			alert("Запрос не удался")
		}
	})
	.then(data => show_users(data)); 
		
});

let show_users = data => {
	// console.log(data[0].name);
	let block = "";
	for(let item of data){
		console.log(item.name);
		block += `
		<div class="card" style="width:400px">
    <div class="card-body">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-text">${item.address.city}, ${item.address.street}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  `;
	}
	document.querySelector("#root").innerHTML = block
}
	
	
	//Post 
	
	let form = document.querySelector('.form');
	let fields = document.querySelectorAll('.fields');

	form.addEventListener('submit', function(){

		let errors = document.querySelectorAll('.error');
		let data = {};
		for(let i = 0; i < errors.length; i++){
			errors[i].remove();
		}

		for(let i = 0; i < fields.length; i++){
			if(fields[i].value == ""){
				let error = document.createElement('p');
				error.className = 'error';
				error.style.color = 'red';
				error.innerHTML = 'Данное поле пустое, заполните';
				form[i].parentElement.insertBefore(error, fields[i]);
			}
			else{
				data[fields[i].id] = fields[i].value;
			}
		}
		callApi(data);
	});



function callApi(data){
	
	let jsonData = JSON.stringify(data);
	// console.log(jsonData);
	// return;

	const url = 'https://reqres.in/api/users';
	const options = {
		method: "POST",
		headers:{
			"Content-type": 'application/json'
		},
		body: jsonData
	};
	fetch(url,options)
	.then(response => response.json())
	.then(data => console.log(data))
}





// let btn = document.querySelector("button");
// let out = document.querySelector("#out");
// let out2 = document.querySelector("#out2");
// let p = document.createElement("p");
// let block = document.querySelector(".block");
// btn.addEventListener("click" , function(){



	
	
// 	let adress = fetch("https://jsonplaceholder.typicode.com/users")
	
// 	adress.then(response => {
// 		return response.json();
	
// 	}).then(data => {
// 		data.forEach((input) => {
// 			out.innerHTML = ("Name:" +input.name);
// 			out2.innerHTML = ("Username" +input.username);
// 			console.log();
// 		})
// 		console.log(data);
// 		})
// 	});
		
		
 
// let btn = document.querySelector("button");	
// let out = document.querySelector("#out");
// let name = ["user" , "age" , "adress" , "mail"];
// btn.addEventListener("click" , show);

// function show(){
// 	out.innerHTML = name[2];
// 	console.log(name[2]);
// }











