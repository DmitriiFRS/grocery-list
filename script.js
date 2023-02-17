const input = document.querySelector(".grocery__input");
const accept = document.querySelector(".btn");
const result = document.querySelector(".grocery__list-block");
const cancel = document.querySelector(".grocery__cancel-btn");

accept.addEventListener("click", (e) => {
   if (input.value == "") {
      return;
   }
   else
   result.innerHTML += `<li class="list">${input.value}</li><br>`;
   input.value = "";
   const list = document.querySelectorAll(".list");
   list.forEach((li) => {
      li.addEventListener("click", () => {
         if (li.style.textDecoration == "" || li.style.textDecoration == "none"){
         li.style.textDecoration = "line-through";
         li.classList.toggle("list2");
      }
         else {
            li.style.textDecoration = "none";
            li.classList.toggle("list2");
         }
      })
   })
});

cancel.addEventListener("click", () => {
   result.innerHTML = "";
})