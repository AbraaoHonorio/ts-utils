validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');


    if (cnpj || cnpj.length !== 14 ) { return false; }


    if (cnpj.match(/^([1]{14}|[2]{14}|[3]{14}|[4]{14}|[5]{14}|[6]{14}|[7]{14}|[8]{14}|[9]{14})$/)) {
      alert(' deu ruim');
      return false;
    }

    // Valida DVs LINHA 23 -
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
            pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +digitos.charAt(0)) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
            pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +digitos.charAt(1)) {
      return false;

    }



    return true;

}
