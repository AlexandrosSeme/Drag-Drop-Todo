const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
const startedstatus = document.querySelectorAll(".started_status");

const inprogressstatus = document.querySelectorAll(".inprogress_status");
const completedstatus = document.querySelectorAll(".completed_status");
let draggableTodo = null;

todos.forEach(todo => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend',dragEnd);
});
function dragStart () {
     draggableTodo = this;
    console.log("dragStart");
}
function dragEnd () {
    draggableTodo = null;
    console.log("dragEnd");
}

all_status.forEach((status) => {
    status.addEventListener("dragover",dragOver);
    status.addEventListener("dragenter",dragEnter);
    status.addEventListener("dragleave",dragLeave);
    status.addEventListener("drop",dragDrop);

});

function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
}
function dragEnter() {  
    console.log("dragEnter");
}
function dragLeave() {
    console.log("dragLeave");
    
}
function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}
//////////////////////////////////////////////////////////////////
inprogressstatus.forEach((inprogress_status) => {
    inprogress_status.addEventListener("dragover",dragOver);
    inprogress_status.addEventListener("dragenter",dragEnter);
    inprogress_status.addEventListener("dragleave",dragLeave);
    inprogress_status.addEventListener("drop",dragDrop);

});

function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
}
function dragEnter() {
    //this.style.border = '1px dashed rgb(17, 17, 17)';
    console.log("dragEnter");
}
function dragLeave() {
    console.log("dragLeave");
}
function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}
////////////////////////////////////////////////////////////////////
startedstatus.forEach((started_status) => {
    started_status.addEventListener("dragover",dragOver);
    started_status.addEventListener("dragenter",dragEnter);
    started_status.addEventListener("dragleave",dragLeave);
    started_status.addEventListener("drop",dragDrop);

});

function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
}
function dragEnter() {
    //this.style.border = '1px dashed rgb(17, 17, 17)';
    console.log("dragEnter");
}
function dragLeave() {
    console.log("dragLeave");
}
function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}
////////////////////////////////////////////////////////////////////

completedstatus.forEach((completed_status) => {
    completed_status.addEventListener("dragover",dragOver);
    completed_status.addEventListener("dragenter",dragEnter);
    completed_status.addEventListener("dragleave",dragLeave);
    completed_status.addEventListener("drop",dragDrop);

});

function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
}
function dragEnter() {
    //this.style.border = '1px dashed rgb(17, 17, 17)';
    console.log("dragEnter");
}
function dragLeave() {
    console.log("dragLeave");
}
function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}

/*Modal JS*/

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
