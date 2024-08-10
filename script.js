// Animação suave para rolagem até as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste o valor 80 para coincidir com a altura do seu header
        behavior: 'smooth'
      });
    });
  });
  
  // Efeito de digitação no título do Hero
  const heroTitle = document.querySelector('#hero h2');
  const titleText = "Renderize em alta qualidade, e sem dores de cabeça!";
  let index = 0;
  
  function typeWriter() {
    if (index < titleText.length) {
      heroTitle.innerHTML += titleText.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Ajuste a velocidade de digitação aqui (em milisegundos)
    }
  }
  
  typeWriter(); // Inicia o efeito de digitação
  
  // Carregar imagens do Portfólio (vamos simular por enquanto)
  const portfolioGallery = document.querySelector('.galeria');
  
  // Substitua os exemplos pelas suas próprias imagens
  const images = [
    { src: 'imagem1.jpg', alt: 'Descrição da imagem 1' },
    { src: 'imagem2.jpg', alt: 'Descrição da imagem 2' },
    { src: 'imagem3.jpg', alt: 'Descrição da imagem 3' }
  ];
  
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    portfolioGallery.appendChild(imgElement);
  });

  window.addEventListener('load', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.getElementById('hero').style.paddingTop = `${headerHeight}px`;
  });