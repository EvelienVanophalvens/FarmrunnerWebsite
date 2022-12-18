document.querySelector("#btnReview").addEventListener("click", function(e){
    e.preventDefault();
    let div = document.createElement("div");
    div.classList.add("revieuws");
    div.innerHTML = document.querySelector("#leaveReview").value;
    document.querySelector("#revieuw").appendChild(div);
})


