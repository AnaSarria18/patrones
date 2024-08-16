class Chat {
    constructor () {
    this.mensajes = []
    }

    addmsj (chat) {
        this.mensajes.push(chat)
    }

    notificaciones (mss) {
        this.mensajes.forEach(observador => observador(mss) )
    }

}


let pepito = new Chat()


function observador (mensajese){
    document.querySelector('#chattext').innerText=mensajese
}

pepito.addmsj(observador)
document.querySelector('#notificacionesbtn').addEventListener("click" , () => {
    pepito.notificaciones()
})
