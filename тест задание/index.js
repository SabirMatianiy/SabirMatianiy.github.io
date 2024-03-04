// let btn = document.querySelector("button");
// let out = document.querySelector("#out");

// btn.addEventListener("click" , function(){

// 	let url = "https://jsonplaceholder.typicode.com/users";

	
// 	fetch(url)
// 	.then(response => {
// 		if(response.status === 200){
// 		return	response.json();
// 		}
// 		else{
// 			alert("Запрос не удался")
// 		}
// 	})
// 	.then(data => show_users(data)); 
		
// });

// let show_users = data => {
// 	// console.log(data[0].name);
// 	let block = "";
// 	for(let item of data){
// 		console.log(item.name);
// 		block += `
// 		<div class="card" style="width:400px">
//     <div class="card-body">
//       <h4 class="card-title">${item.name}</h4>
//       <p class="card-text">${item.address.city}, ${item.address.street}</p>
//       <a href="#" class="btn btn-primary">See Profile</a>
//     </div>
//   </div>
//   `;
// 	}
// 	document.querySelector("#root").innerHTML = block
// }
	
	
// 	//Post 
	
// 	let form = document.querySelector('.form');
// 	let fields = document.querySelectorAll('.fields');

// 	form.addEventListener('submit', function(){

// 		let errors = document.querySelectorAll('.error');
// 		let data = {};
// 		for(let i = 0; i < errors.length; i++){
// 			errors[i].remove();
// 		}

// 		for(let i = 0; i < fields.length; i++){
// 			if(fields[i].value == ""){
// 				let error = document.createElement('p');
// 				error.className = 'error';
// 				error.style.color = 'red';
// 				error.innerHTML = 'Данное поле пустое, заполните';
// 				form[i].parentElement.insertBefore(error, fields[i]);
// 			}
// 			else{
// 				data[fields[i].id] = fields[i].value;
// 			}
// 		}
// 		callApi(data);
// 	});



// function callApi(data){
	
// 	let jsonData = JSON.stringify(data);
// 	// console.log(jsonData);
// 	// return;

// 	const url = 'https://reqres.in/api/users';
// 	const options = {
// 		method: "POST",
// 		headers:{
// 			"Content-type": 'application/json'
// 		},
// 		body: jsonData
// 	};
// 	fetch(url,options)
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// }





// let btn = document.querySelector("button");
// let out = document.querySelector("#out");

document.addEventListener("DOMContentLoaded", function () {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(response => {
            if (response.status == 200) {
            	
                return response.json();
            } 
            else {

                alert("Запрос не удался");
            }
        })
        .then(data => show_users(data));
});

let show_users = data => {
    let sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
    let block = "";
    for (let item of sortedData) {
        block += `
        <div class="card" style="width:400px">
            <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <p class="card-text">${item.address.city}, ${item.address.street}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>`;
    }
    document.querySelector("#root").innerHTML = block;
}











