let vDom = [];

function createDomElements(existingDom, currentDom) {
    let added = 0, updated = 0, deleted = 0;

    currentDom.forEach(item => {
        const existingItem = existingDom.find(oldItem => oldItem.id === item.id);

        if (existingItem) {
            updated++;
            let existingElement = document.getElementById(item.id);
            existingElement.children[0].innerHTML = item.title;
            existingElement.children[1].innerHTML = item.description;

            existingDom = existingDom.filter(oldItem => oldItem.id !== existingItem.id);
        } else {
            added++;
            const parentElement = document.getElementById("mainArea");

            const childElement = document.createElement("div");
            childElement.setAttribute("id", item.id);

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
        }
    });

    existingDom.forEach(oldItem => {
        deleted++;
        const elementToRemove = document.getElementById(oldItem.id);
        elementToRemove.remove();
    })

    console.log("Added: " + added);
    console.log("Updated: " + updated);
    console.log("Deleted: " + deleted);
}

function updateVirtualDom(data) {
    let existingDom = [...vDom]; // save the existing state of vDom
    vDom = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
        };
    });
    
    createDomElements(existingDom, vDom);
}

window.setInterval(function() {
    let todos = [];
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
        todos.push({
            id: i+1,
            title: "Gym",
            description: "Go to gym",
        });
    }
    updateVirtualDom(todos);
}, 5000);