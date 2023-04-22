var rellax = new Rellax('.rellax');

window.addEventListener("scroll", function() {
    // Pega a posição vertical do scroll
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    //
    var sectionSigi = document.querySelector('.SIGI');
    var sigiTop = sectionSigi.offsetTop;
    var sigiHeight = sectionSigi.offsetHeight;
    var windowHeight = window.innerHeight;

    // Define a quantidade de cinza a ser aplicada na imagem
    var grayScale = Math.min(scrollTop / 250, 1);
    
    // Atualiza o estilo da imagem
    document.getElementById("mudarcor").style.filter = "blur(0.3rem) brightness(0.5) grayscale(" + grayScale + ")";
    
    // Adiciona a classe 'grayscale' quando a imagem estiver totalmente cinza
    if (grayScale >= 1) {
        document.getElementById("mudarcor").classList.add("grayscale");
    } else {
        document.getElementById("mudarcor").classList.remove("grayscale");
    }

    //
    if (scrollTop > sigiTop - windowHeight && scrollTop < sigiTop + sigiHeight) {
        var children = sectionSigi.querySelectorAll('*'); // seleciona todos os elementos filhos
        children.forEach(function(child) {
          child.classList.add('animate');
        });
      } else {
        var children = sectionSigi.querySelectorAll('*');
        children.forEach(function(child) {
          child.classList.remove('animate');
        });
    }
});