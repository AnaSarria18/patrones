class ListaUsuario{
    constructor(){
        this.nombres = [];
    }

    agregarNombre(n){
        this.nombres.push(n);
        
    }


    listarNombres(){
        let listaN = "";
        for(let i=0;i<this.nombres.length;i++){
            listaN +=this.nombres[i]
    }
    return listaN;
  }
}


let listUser = new ListaUsuario();
document.querySelector("#agregarNombreBtn").addEventListener("click", ()=> {
    let nInput = document.querySelector("#nombreInput").value
    listUser.agregarNombre(nInput);
})

document.querySelector("#listaNombresBtn").addEventListener("click", ()=> {
    let lista = listUser.listarNombres();
    document.querySelector("#resultado").innerText = lista;
})



