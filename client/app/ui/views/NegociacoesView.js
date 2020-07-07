class NegociacoesView extends View {

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
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.volumeTotal}</td>
                </tfoot>
            </table>
        `
    }
}