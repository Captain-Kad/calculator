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
    square_root = res.indexOf('√');

    if (square_root > -1) {
      sqrt_slice = res.slice(square_root + 1)
      res2 = Math.sqrt(sqrt_slice);
      res = res.slice(0, square_root);
      res = res.concat(res2);
    }
    document.getElementById("result").innerHTML = eval(res);
  }
}

