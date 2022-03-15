var estruturacheckbox = document.querySelector("input[name=checkestrutura]");

estruturacheckbox.addEventListener("change", function () {
  if (this.checked) {
    estruturachecked.style.display = "inline";
    console.log("Estrutura está marcado..");
  } else {
    estruturachecked.style.display = "none";
    console.log("Estrutura está desmarcado..");
  }
});

var transportecheckbox = document.querySelector("input[name=checktransporte]");

transportecheckbox.addEventListener("change", function () {
  if (this.checked) {
    transportechecked.style.display = "inline";
    transporteunchecked.style.display = "none";
    console.log("Transporte está marcado..");
  } else {
    transportechecked.style.display = "none";
    transporteunchecked.style.display = "inline";
    console.log("Transporte está desmarcado..");
  }
});

var cachecheckbox = document.querySelector("input[name=checkcache]");

cachecheckbox.addEventListener("change", function () {
  if (this.checked) {
    cachechecked.style.display = "inline";
    cacheunchecked.style.display = "none";
    console.log("Cachê está marcado..");
  } else {
    cachechecked.style.display = "none";
    cacheunchecked.style.display = "inline";
    console.log("Cachê está desmarcado..");
  }
});

function valorfinal(event) {
  event.preventDefault();

  const custoestrutura = document.getElementById("custoestrutura").value;
  const consumocarro = document.getElementById("consumocarro").value;
  const taxadiasemana = document.getElementById("diasemana").value;
  const tempodeshow = document.getElementById("temposhow").value;
  const price = document.getElementById("precogasolina").value;
  const dist = document.getElementById("distanciashow").value;
  const total = document.getElementById("total");

  const cacheartista1 = document.getElementById("cacheartista1").value;
  const cacheartista2 = document.getElementById("cacheartista2").value;
  const cacheartista3 = document.getElementById("cacheartista3").value;
  const cacheartista4 = document.getElementById("cacheartista4").value;

  consumototal =
    (parseFloat(dist) / parseFloat(consumocarro)) * 2 * parseFloat(price);

  cachetotal =
    (parseInt(cacheartista1) +
      parseInt(cacheartista2) +
      parseInt(cacheartista3) +
      parseInt(cacheartista4)) *
    parseFloat(tempodeshow);

  custototal = parseFloat(consumototal) + parseInt(custoestrutura);

  total.innerHTML = parseFloat(custototal) + parseInt(cachetotal);
}
