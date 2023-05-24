function storeJobRef1() {
  var job01 = document.getElementById("job01").value;
  localStorage.setItem("jobreference", job01);
  location.href = "apply.html";
}

function storeJobRef2() {
  var job02 = document.getElementById("job02").value;
  localStorage.setItem("jobreference", job02);
  location.href = "apply.html";
}


function init() {
  var ref1 = document.getElementById("job01");
  var ref2 = document.getElementById("job02");

  ref1.addEventListener("click", storeJobRef1);
  ref2.addEventListener("click", storeJobRef2);
}

window.onload = init;
