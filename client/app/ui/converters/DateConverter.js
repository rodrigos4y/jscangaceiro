class DateConverter {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static paraTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }


    static paraData(texto) {

        // Testa se o texto começa com 4 dígitos, seguido de um hífen e de um número com 2 dígitos e termina com um número de 2 dígitos
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}
