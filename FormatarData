  dataAtualFormatada() {
    const data = new Date();

    let dia = data.getDate().toString();

    if (dia.toString().length === 1) {
      dia = '0' + dia;
    }

    let mes = (data.getMonth() + 1).toString();

    if (mes.toString().length === 1) {
      mes = '0' + mes;
    }
    const ano = data.getFullYear().toString();

    return dia + '/' + mes + '/' + ano;
}
