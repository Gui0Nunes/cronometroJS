const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const millisegundosEl = document.querySelector("#millisegundos")
const IniciarBtn = document.querySelector("#Iniciar")
const PausarBtn = document.querySelector("#Pausar")
const ContinuarBtn = document.querySelector("#Continuar")
const ResetarBtn = document.querySelector("#Resetar")

let interval;

let minutos = 0;
let segundos = 0;
let millisegundos = 0;
let pausado = false;

IniciarBtn.addEventListener("click", startime);
PausarBtn.addEventListener("click", pausar);
ContinuarBtn.addEventListener("click", continuar);
ResetarBtn.addEventListener("click", reiniciar);


function startime() {
    // alert('Clicou em iniciar');

    interval = setInterval(() => {
        if (!pausado) {
            millisegundos += 10;
            if (millisegundos == 1000) {
                segundos++;
                millisegundos = 0;
            }
            if (segundos == 60) {
                minutos++;
                segundos = 0;
            }

            minutosEl.textContent = formatarTempo(minutos);
            segundosEl.textContent = formatarTempo(segundos);
            millisegundosEl.textContent = formatarMillisegundos(millisegundos);
        }

    }, 10)
    IniciarBtn.style.display = "none";
    PausarBtn.style.display = "block";
}

function pausar() {
    pausado = true;
    PausarBtn.style.display = "none";
    ContinuarBtn.style.display = "block";
}

function continuar() {
    pausado = false;
    PausarBtn.style.display = "block";
    ContinuarBtn.style.display = "none";
}

function reiniciar() {
    clearInterval(interval);

    minutos = 0;
    segundos = 0;
    millisegundos = 0;

    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    millisegundosEl.textContent = "000";

    PausarBtn.style.display = "none";
    ContinuarBtn.style.display = "none";
    IniciarBtn.style.display = "block";
    pausado = false;
}

function formatarTempo(time) {
    return time < 10 ? `0${time}` : time;
}

function formatarMillisegundos(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
