class Vehiculo {
    constructor(marca, modelo) {
        if (marca instanceof Vehiculo) {
            this.marca = marca.marca;
            this.modelo = marca.modelo;
        } else {
            this.marca = marca;
            this.modelo = modelo;
        }
    }

    mostrar() {
        return this.marca + " " + this.modelo;
    }
}


document.querySelector('#crear').addEventListener("click" , () => {
    let intmarca = document.querySelector('#marca').value
    let intmodelo = document.querySelector('#modelo').value
    let vehiculo1 = new Vehiculo(intmarca, intmodelo);
    let info = vehiculo1.mostrar()
    alert(info)
    document.querySelector("#resultado").innerText=info
})



console.log()
let vehiculo2 = new Vehiculo(vehiculo1);
console.log(vehiculo2.mostrar()); 





