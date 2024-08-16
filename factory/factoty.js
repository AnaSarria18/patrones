class Camioneta{
    constructor(){
        this.tipo = "camioneta";
        this.descrpcion = "vehiculo grande y despacioso de carga pesada";
    }
    mostrar(){
        return " tipo: " + this.tipo +  " descripcion " + this.descrpcion
    }
}


class Sedan{
    constructor(){
        this.tipo = "sedan";
        this.descrpcion = "vehiculo comodo y elegante";
    }
    mostrar(){
        return " tipo: " + this.tipo +   " descripcion " + this.descrpcion
    }
}



class Deportivo{
    constructor(){
        this.tipo = "deportivo";
        this.descrpcion = "vehiculo rapido y con diseño";
    }
    mostrar(){
        return " tipo: " + this.tipo +    " descripcion " + this.descrpcion
    }
}

class Vehiculo{
    solicitarVehiculo(tipo){
        if(tipo == "camioneta"){
         let camion =new Camioneta()
         return camion.mostrar();
        }
        else if(tipo == "sedan"){
           let sed = new Sedan()
           return sed.mostrar();
        } 
        else if(tipo == "deportivo"){
            let depor =  new Deportivo()
            return depor.mostrar();
        } 
    }
}

/* capturar el boton  */
document.querySelector("#crearBtn").addEventListener("click", ()=>{
    let tipoV=document.querySelector("#tipovehiculo").value;
    let vehiculoS = new Vehiculo();
    let resul = vehiculoS.solicitarVehiculo(tipoV)

    /* capturar el id de P del html */ 
    document.querySelector("#resultado").innerText= resul 
})
