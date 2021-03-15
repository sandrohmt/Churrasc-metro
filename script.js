// Carne -  400gr por homem + de 6 horas - 650gr 
// Carne -  300gr por mulher + de 6 horas - 550gr 
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem como 1/2 pessoa, não bebe cerveja

function calculate() {
    
    const time = document.getElementById("time").value
    const man = document.getElementById("man").value
    const woman = document.getElementById("woman").value
    const children = document.getElementById("children").value * 0.5
    
    if (time < 6){
    let steak = (0.4 * man) + (0.3 * woman) + (0.4 * children)
    steak = steak.toFixed(2)
    let beer = 1.2 * (Number(man) + Number(woman))
    beer = beer.toFixed(2)
    let drink = 1 * (Number(man) + Number(woman) + Number(children))
    drink = drink.toFixed(2)
    document.getElementsByTagName("li")[0].innerHTML = `${steak}kg de Carne.`
    document.getElementsByTagName("li")[1].innerHTML = `${Math.ceil(beer / 0.355)} latas de Cerveja.`
    document.getElementsByTagName("li")[2].innerHTML = `${Math.ceil(drink / 2) } garrafas de Refrigerante.`
    }
    else {
        let steak = (0.65 * man) + (0.55 * woman) + (0.65 * children)
        steak = steak.toFixed(2)
        let beer = 2 * (Number(man) + Number(woman))
        beer = beer.toFixed(2)
        let drink = 1.5 * (Number(man) + Number(woman) + Number(children))
        drink = drink.toFixed(2)
        document.getElementsByTagName("li")[0].innerHTML = `${steak}kg de Carne.`
        document.getElementsByTagName("li")[1].innerHTML = `${Math.ceil(beer / 0.355)} latas de Cerveja.`
        document.getElementsByTagName("li")[2].innerHTML = `${Math.ceil(drink / 2)} garrafas de Refrigerante.`
    }
}

const Modal = {
    open() {
        if (document.getElementById("time").value != '' 
        && document.getElementById("man").value != '' 
        && document.getElementById("woman").value != ''
        && document.getElementById("children").value != ''){
        document.querySelector(".modal-overlay").classList.add("active")}
    },

    close () {
        document.querySelector(".modal-overlay").classList.remove("active")
        document.getElementById("time").value = '' 
        document.getElementById("man").value = ''
        document.getElementById("woman").value = ''
        document.getElementById("children").value = ''
    }
}