class Empleado {
    static instancia
    constructor (nombre) {
        if (!Empleado.instancia) {
            this.nombre =  nombre
            Empleado.instancia=this
        }else{
            return Empleado.instancia
        }
    }


    mostrardatos () {
        return this.nombre
    }
}

document.querySelector('#empleadobtn').addEventListener("click" , () => {
    let datos = new Empleado("santiago martinez")
    document.querySelector('#empleadotexto').innerText= datos.mostrardatos()
    let datos1 = new Empleado("james caderas")
    document.querySelector('#empleadotexto').innerText= datos1.mostrardatos()
})

