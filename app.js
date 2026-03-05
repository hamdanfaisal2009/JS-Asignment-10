const addForm = document.querySelector(".add");
const searchInput = document.querySelector(".search input");
const list = document.querySelector(".todos");
const addButton = document.querySelector(".btn");

let Index = null;

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (Index === null) {
    list.innerHTML += `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${addForm.add.value}</span>
        <div>
          <i class="fas fa-edit edit"></i>
          <i class="far fa-trash-alt delete"></i>
        </div>
      </li>
  `;
  } else {
    list.children[Index].querySelector("span").textContent =
      addForm.add.value;
    Index = null;
    addButton.textContent = "Add Todo";
  }

  addForm.reset();
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    alert(" Are you sure you want to delete this todo?");
  }

  if (e.target.classList.contains("edit")) {
    const items = list.children;
    const targetItem = e.target.parentElement.parentElement;
    addButton.textContent = "Update Todo";

    for (let i = 0; i < items.length; i++) {
      if (items[i] === targetItem) {
        console.log(i);
        Index = i;
      }
    }

    addForm.add.value =
      e.target.parentElement.previousElementSibling.textContent;
  }
});


const filter = searchInput.value.toUpperCase();
const items = list.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const span = items[i].getElementsByTagName("span")[0];
    const textValue = span.textContent || span.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }

searchInput.addEventListener("keyup", myFunction);
searchInput.addEventListener("input", myFunction);
