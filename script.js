function clickMenu() {
    if ( menuescondido.style.visibility == 'visible') {
       menuescondido.style.visibility = 'hidden'
     } else {
       menuescondido.style.visibility = 'visible'
     }
  }

  window.sr = ScrollReveal({reset:true});
  // Animação Header
  sr.reveal('.estilo-header', 
    { 
        duration: 3000,
        distance: '50px',
        origin: 'top',
    })
  
  // Animações topo

  sr.reveal('.estilo-imagem-topo', 
    { 
        duration: 2000,
        distance: '90px',
        origin: 'right'
    })

    sr.reveal('.estilo-texto-topo', 
        { 
            duration: 2000,
            distance: '90px',
            origin: 'left'
        })

//Animação Sobre

sr.reveal ('.estilo-texto-sobre', {
    duration: 2000,
    distance: '90px',
    origin: 'right'
})

sr.reveal ('.estilo-imagem-sobre', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
})

// Animações Títulos Seções
    sr.reveal('.efeito-titulo', {
        duration: 2000,
        distance: '90px',
        delay: 200
    })


// Animações Hard Skills

sr.reveal('.hardskills-animation1', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

sr.reveal('.hardskills-animation2', {
    duration: 2000,
    distance: '90px',
    delay: 1000
})

sr.reveal('.hardskills-animation3', {
    duration: 2000,
    distance: '90px',
    delay: 1500
})

// Animações Projetos


sr.reveal('.estilo-img-projeto', 
    { 
        duration: 2000,
        distance: '90px',
        origin: 'left'
    })

    sr.reveal('.estilo-texto-projeto', 
        { 
            duration: 2000,
            distance: '90px',
            origin: 'right'
        })

// Animações Certificados

sr.reveal('.animation-certificado-1', {
    duration: 2000,
    distance: '90px',
    origin: 'left',
    delay: 500
})

sr.reveal('.animation-certificado-2', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom',
    delay: 500
})

sr.reveal('.animation-certificado-3', {
    duration: 2000,
    distance: '90px',
    origin: 'right',
    delay: 500
})

//Animação footer

sr.reveal('.text-footer-animation', {
    duration: 1000,
    distance: '90px',
    origin: 'bottom',
})