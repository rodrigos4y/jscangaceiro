class Negociacao {
    constructor(_data, _quantidade, _valor){
        Object.assign(this, { _quantidade, _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }
}