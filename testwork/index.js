



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


