class Negociacao {
    constructor(_data, _quantidade, _valor){
        Object.assign(this, { _quantidade, _valor});
        //Esta separado porque precisa pegar o valor quando iniciado
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }
}