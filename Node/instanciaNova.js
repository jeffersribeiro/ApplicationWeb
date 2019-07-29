// Uma factory retorna um novo Obejct.

module.exports = function() {
    return {
        valor : 1,
        inc(){
            this.valor ++
        }
    }
}