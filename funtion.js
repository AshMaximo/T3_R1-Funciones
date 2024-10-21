<<<<<<< HEAD
function lanzamiento() {
  let dado = Math.random() * (6 - 1) + 1;
  return Math.round(dado);
}
function seismil() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  for (let i = 0; i < 6000; i++) {
    let dado = Math.round(Math.random() * (6 - 1) + 1);
    switch (dado) {
      case 1:
        num1++;
        break;
      case 2:
        num2++;
        break;
      case 3:
        num3++;
        break;
      case 4:
        num4++;
        break;
      case 5:
        num5++;
        break;
      case 6:
        num6++;
        break;
    }
  }
  return (
    "Ha salido el numero 1:" +
    num1 +
    " <br> Ha salido el numero 2:" +
    num2 +
    "<br>Ha salido el numero 3:" +
    num3 +
    "<br>Ha salido el numero 4:" +
    num4 +
    "<br>Ha salido el numero 5:" +
    num5 +
    "<br>Ha salido el numero 6:" +
    num6
  );
}
=======
function lanzamiento() {
  let dado = Math.random() * (6 - 1) + 1;
  return Math.round(dado);
}
function seismil() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  for (let i = 0; i < 6000; i++) {
    let dado = Math.round(Math.random() * (6 - 1) + 1);
    switch (dado) {
      case 1:
        num1++;
        break;
      case 2:
        num2++;
        break;
      case 3:
        num3++;
        break;
      case 4:
        num4++;
        break;
      case 5:
        num5++;
        break;
      case 6:
        num6++;
        break;
    }
  }
  return (
    "Ha salido el numero 1:" +
    num1 +
    " <br> Ha salido el numero 2:" +
    num2 +
    "<br>Ha salido el numero 3:" +
    num3 +
    "<br>Ha salido el numero 4:" +
    num4 +
    "<br>Ha salido el numero 5:" +
    num5 +
    "<br>Ha salido el numero 6:" +
    num6
  );
}
>>>>>>> ffd5d3b7a4d131f6eb2de5c6ee2388a84155f61c
