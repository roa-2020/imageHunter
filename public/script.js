let modal = document.getElementById("myModal");
let btn = document.getElementById("button");
let span = document.getElementsByClassName(".close")[0];

btn.onclick = function () {
  console.log("click");
  modal.style.display = "block";
};

span.onclick = function () {
  console.log("click");
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
