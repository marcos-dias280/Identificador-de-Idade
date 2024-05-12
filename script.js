function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); //aqui ele pegara o ano todo ex: 2024
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value > ano || fano.value <= 0) { //se a pessoa nao digitar, ou o ano digitado for maior que o ano atual dará erro
        window.alert('Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''; //recebe o valor nulo, por não saber qual genero a pessoa colocou
        var img = document.createElement('img'); //criando um img no HTML
        img.setAttribute('id', 'foto'); //criando um img id'foto' = dinamicamente

      

        if (fsex[0].checked) { //a marcação se trata de uma lista, começando por 0/1/... (0 = Mascu / 1= femin)
            genero = 'Homem';

            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', '/Contador de idade/foto.menino.jpg');

            } else if (idade < 59) {
                //adulto     
                img.setAttribute('src', '/Contador de idade/foto.homem.jpg');
            } else if (idade >= 59) {
                //idoso
                img.setAttribute('src', '/Contador de idade/foto.idoso.jpg');
            }



        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', '/Contador de idade/foto.menina.jpg');

            } else if (idade < 59) {
                //adulta     
                img.setAttribute('src', '/Contador de idade/foto.mulher.jpg');
            } else if (idade >= 59) {
                //idosa
                img.setAttribute('src', '/Contador de idade/foto.idosa.jpg');
            }
        }
        res.innerHTML = `<p>Detectamos seu gênero: ${genero} com ${idade} anos.</p>`;
        res.appendChild(img);
    }
}
