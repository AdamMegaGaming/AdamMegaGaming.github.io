
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#addBtn").onclick = newElement;
    let myNodeList = document.querySelectorAll("#myUL li");
    myNodeList.forEach(li => {
        updateListItem(li);
    })

});

function newElement() {
    let task = document.querySelector(`#myInput`).value
    if (task.length > 0) {
        let li = document.createElement("li");
        li.innerHTML = task;
        document.querySelector(`#myUL`).appendChild(li);
        document.querySelector(`#myInput`).value = "";
    }
    else {
        alert("not ok")
    }
}

function updateListItem(li) {
    li.onclick = function () {
        li.classList.toggle("checked")
    }
    let span = document.createElement(`span`);
    span.innerHTML = "\u00D7"
    span.className = "close";
    span.onclick = function () {
        span.parentElement.stlye.display = "none";
    };
    li.appendChild(span)
}