function appendAndSolve(btnId) {
  var buttonVal = document.getElementById(btnId).value;
  document.getElementById("result").innerHTML += buttonVal;

  if (btnId === "clear") {
    document.getElementById("result").innerHTML = null;
  }

  if (btnId === "answer") {
    res = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = eval(res);
  }
}

function changeSymbol(btnId) {
  if (btnId === "answer") {
    res = document.getElementById("result").innerHTML;
    res = res.replace(/÷/g, "/");
    res = res.replace(/×/g, "*");
    if (res.charAt(0) === "√") {
      res = Math.sqrt(res.slice(1));
    }
    document.getElementById("result").innerHTML = eval(res);
  }
}
