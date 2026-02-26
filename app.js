const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please enter a Task to make a new Todo Task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    li.classList.add("delete"); 
    
  
    li.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if(confirmDelete){
            const placeholder = document.createElement("li");
            placeholder.textContent = "This task has been deleted";
            placeholder.classList.add("deleted");
            li.replaceWith(placeholder);
        }
    });
    
    ul.append(li);

    input.value = "";
});

const lineItems = document.querySelectorAll(".line");

lineItems.forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});

const deleteItems = document.querySelectorAll(".delete");

deleteItems.forEach(li => {
  li.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if(confirmDelete){
      const placeholder = document.createElement("li");
      placeholder.textContent = "This task has been deleted";
      placeholder.classList.add("deleted");
      li.replaceWith(placeholder);
    }
  });
});

