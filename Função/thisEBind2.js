function Pessoa(){
    this.idade =0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000 )
}
new Pessoa

function Pessoa2(){
    const self  = this
    self.idade =0
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },500 )
}
Pessoa2()

