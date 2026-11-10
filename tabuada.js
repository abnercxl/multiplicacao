let calculo = document.querySelector("#calcular");
calcular.addEventListener("click", tabuada);

function tabuada() {
    let tn1 = document.querySelector("#txtn1")
        
    let n1 = Number(tn1.value)

    let resultado = document.querySelector("#resultado");


    let resp = "";

    for (let i = 1; i <= 10; i++) {
        resp += `${n1} x ${i} = ${n1 * i} \n `;
    }
    resultado.innerText = resp
}