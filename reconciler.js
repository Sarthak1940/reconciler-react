function createDomElement(data) {
    const parentElement =document.getElementById("mainArea");
    parentElement.innerHTML = "";

    data.forEach(item => {
        const childElement = document.createElement("div");
        childElement.dataset.id = item.id;

        const grandChildELement1 = document.createElement("span");
        grandChildELement1.innerHTML = item.title;

        const grandChildELement2 = document.createElement("span");
        grandChildELement2.innerHTML = item.description;

        const grandChildELement3 = document.createElement("button");
        grandChildELement3.innerHTML = "Delete";

        childElement.appendChild(grandChildELement1);
        childElement.appendChild(grandChildELement2);
        childElement.appendChild(grandChildELement3);

        parentElement.appendChild(childElement);
    });
}

window.setInterval(function() {
    let todos = [];
    for(let i = 0; i < Math.floor(Math.random() * 100); i++) {
        const todo = {
            id: i+1,
            title: "gym",
            description: "go to gym"
        };
        todos.push(todo);
    }
    createDomElement(todos);
}, 5000);