function createDomElement(data) {
    const parentElement = document.getElementById("mainArea");

    let currentChildren = Array.from(parentElement.children);

    let added = 0, updated = 0, removed = 0;

    data.forEach(item => {
        const existingChild = currentChildren.find(child => child.dataset.id === String(item.id));

        if (existingChild) {
            updated++;
            existingChild.children[0] = item.title;
            existingChild.children[1] = item.description;

           currentChildren = currentChildren.filter(child => child !== existingChild);
        }
        else {
            added++;
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
        }

    });

    currentChildren.forEach(child => {
        removed++;
        child.remove();
    })

    console.log("updated: " + updated);
    console.log("added: " + added);
    console.log("removed: " + removed);
}

window.setInterval(function() {
    let todos = [];
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
        todos.push(
            {
                id: i+1,
                title: "gym",
                description: "go to gym"
            }
        );  
    }
    createDomElement(todos);
}, 10000);