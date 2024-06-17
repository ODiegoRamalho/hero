class hero {
    constructor( nome, idade, tipo ){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    toAttack( ){
       
        if(this.tipo == "mago") {
            console.log(`O ${this.nome} atacou usando magia`)
            }else if( this.tipo == "guerreiro") {
                console.log(`O ${this.nome} atacou usando espada`)
            }else if (this.tipo == "monge"){
                console.log(`O ${this.nome} atacou usando artes marciais`)
            }else if (this.tipo == "ninja") {
                console.log(`O ${this.nome} atacou usando shuriken`)
            }
    }
}

let heroUne = new hero("Feio", 32, "ninja")
heroUne.atacar()