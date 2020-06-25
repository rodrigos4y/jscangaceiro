class NegociacoesView {

    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.paraArray().map(negociacao => {
                        return `
                            <tr>
                                <td>${DateConverter.paraTexto(negociacao._data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                                <td>${negociacao._volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `
    }
}