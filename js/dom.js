(function(doc) {

    const imagens = doc.querySelectorAll('.imagem');
    imagens.forEach(elemento => {
        elemento.addEventListener('mouseover', event => {
            event.target.src = 'img/service2.png'
            elemento.classList.add('borda-10')
        })

        elemento.addEventListener('mouseout', function callback(event) {
            event.target.src = 'img/service3.png'
            elemento.classList.remove('borda-10')
        })
    })

    // const lista = ['Paulo', 'Celso', 'Ana'];
    // lista.forEach

})(document)