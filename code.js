var rellax = new Rellax('.rellax');

document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.offsetTop-150;
        const startPosition = window.pageYOffset;
        const distance = (targetPosition - startPosition);
        let startTime = null;
      
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const run = easing(elapsedTime, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (elapsedTime < duration) {
            requestAnimationFrame(animation);
          }
        }
      
        function easing(t, b, c, d) {
          // easing function for smoother animation
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
      
        requestAnimationFrame(animation);
    }
      
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = link.getAttribute('href');
            const duration = 1000; // adjust the duration value to your preference
            smoothScroll(target, duration);
        });
    });

    const seta = document.getElementById('mv');
    const setao = seta.querySelector('img');

    seta.addEventListener('click', event => {
        event.preventDefault();
        setao.classList.add('rodarodajequiti');
        setTimeout(() => {
            setao.classList.remove('rodarodajequiti');
            window.location.href = seta.href;
        }, 700);
    });
});
  

window.addEventListener("scroll", function() {
    // Pega a posição vertical do scroll
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    //
    var sectionSigi = document.querySelector('.SIGI');
    var sigiTop = sectionSigi.offsetTop;
    var sigiHeight = sectionSigi.offsetHeight;
    var sectionConvocados = document.querySelector('.convocacao');
    var convocacaoTop = sectionConvocados.offsetTop;
    var convocacaoHeight = sectionConvocados.offsetHeight;
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

    //  
    if (scrollTop > convocacaoTop - windowHeight && scrollTop < convocacaoTop + convocacaoHeight) {
      var children = sectionConvocados.querySelectorAll('*'); // seleciona todos os elementos filhos
      children.forEach(function(child) {
        child.classList.add('animate');
      });
    } else {
      var children = sectionConvocados.querySelectorAll('*');
      children.forEach(function(child) {
        child.classList.remove('animate');
      });
    }
});


