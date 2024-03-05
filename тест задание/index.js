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

// document.addEventListener("DOMContentLoaded", function () {
//     let url = "https://jsonplaceholder.typicode.com/users";

//     fetch(url)
//         .then(response => {
//             if (response.status == 200) {
            	
//                 return response.json();
//             } 
//             else {

//                 alert("Запрос не удался");
//             }
//         })
//         .then(data => show_users(data));
// });

// let show_users = data => {
//     let sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
//     let block = "";
//     for (let item of sortedData) {
//         block += `
//         <div class="card" style="width:400px">
//             <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
//             <div class="card-body">
//                 <h4 class="card-title">${item.name}</h4>
//                 <p class="card-text">${item.address.city}, ${item.address.street}</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//             </div>
//         </div>`;
//     }
//     document.querySelector("#root").innerHTML = block;
// }








// document.addEventListener("DOMContentLoaded", function () {
//     let url = "https://jsonplaceholder.typicode.com/users";

//     fetch(url)
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json();
//             } else {
//                 alert("Запрос не удался");
//             }
//         })
//         .then(data => show_users(data));

//     document.querySelector(".btn").addEventListener("click", sortUsers);
// });

// let show_users = data => {
//     let block = "";
//     for (let item of data) {
//         block += `
//         <div class="card" style="width:400px">
//             <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
//             <div class="card-body">
//                 <h4 class="card-title">${item.name}</h4>
//                 <p class="card-text">${item.address.city}, ${item.address.street}</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//             </div>
//         </div>`;
//     }
//     document.querySelector("#root").innerHTML = block;
//     console.log(data)
// }

// function sortUsers() {
//     let cards = document.querySelectorAll(".card");
//     let sortedCards = Array.from(cards).sort((a, b) => {
//         let nameA = a.querySelector(".card-title").innerText.toLowerCase();
//         let nameB = b.querySelector(".card-title").innerText.toLowerCase();
//         return nameA.localeCompare(nameB);
//     });
//     let root = document.querySelector("#root");
//     root.innerHTML = "";
//     sortedCards.forEach(card => {
//         root.appendChild(card);
//     });
// }



// document.addEventListener("DOMContentLoaded", function () {
//     let url = "https://jsonplaceholder.typicode.com/users";

//     fetch(url)
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json();
//             } else {
//                 throw new Error("Запрос не удался");
//             }
//         })
//         .then(data => {
//             show_users(data); // Отображаем пользователей на странице
//             sortUsers(); // Сортируем пользователей
//         })
//         .catch(error => console.error(error));

//     document.querySelector(".btn").addEventListener("click", sortUsers);
// });
//  console.log(document.querySelector(".btn"));
// let show_users = data => {
//     let block = "";
//     for (let item of data) {
//         block += `
//         <div class="card" style="width:400px">
//             <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
//             <div class="card-body">
//                 <h4 class="card-title">${item.name}</h4>
//                 <p class="card-text">${item.address.city}, ${item.address.street}</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//             </div>
//         </div>`;
//     }
//     document.querySelector("#root").innerHTML = block;
// }

// function sortUsers() {
//     let cards = document.querySelectorAll(".card");
//     let sortedCards = Array.from(cards).sort((a, b) => {
//         let nameA = a.querySelector(".card-title").innerText.toLowerCase();
//         let nameB = b.querySelector(".card-title").innerText.toLowerCase();
//         return nameA.localeCompare(nameB);
//     });
//     let root = document.querySelector("#root");
//     root.innerHTML = "";
//     sortedCards.forEach(card => {
//         root.appendChild(card);
//     });
// }







document.addEventListener("DOMContentLoaded", function () {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Запрос не удался");
            }
        })
        .then(data => {
            show_users(data); // Отображаем пользователей на странице
        })
        .catch(error => console.error(error));

    document.querySelector(".btn").addEventListener("click", sortUsers);
});

let show_users = data => {
    let block = "";
    for (let item of data) {
        block += `
       <div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-text">${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</p>
        <a href="#" class="btn btn-primary">See Profile</a>
    </div>
</div>`;
        console.log(item)
    }
    document.querySelector("#root").innerHTML = block;

}

function sortUsers() {
    let cards = document.querySelectorAll(".card");
    let sortedCards = Array.from(cards).sort((a, b) => {
        let nameA = a.querySelector(".card-title").innerText.toLowerCase();
        let nameB = b.querySelector(".card-title").innerText.toLowerCase();
        return nameA.localeCompare(nameB);
    });
    let root = document.querySelector("#root");
    root.innerHTML = "";
    sortedCards.forEach(card => {
        root.appendChild(card);
    });
}


