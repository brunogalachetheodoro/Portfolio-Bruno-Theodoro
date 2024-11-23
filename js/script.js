function clickMenu() {
    if ( menuescondido.style.visibility == 'visible') {
       menuescondido.style.visibility = 'hidden'
     } else {
       menuescondido.style.visibility = 'visible'
     }
  }

  window.sr = ScrollReveal({reset:true});

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

// Animações Icones

sr.reveal('.icon-animation1', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

sr.reveal('.icon-animation2', {
    duration: 2000,
    distance: '90px',
    delay: 1000
})

sr.reveal('.icon-animation3', {
    duration: 2000,
    distance: '90px',
    delay: 1500
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



sr.reveal('.hardskills-animation', {
    duration: 4000,
    distance: '90px',
    origin: 'left'
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

// Animação Contato

sr.reveal('.efeito-contato1',
    {
        duration: 2000,
        distance: '120px',
        delay: 300
    }
)

sr.reveal('.efeito-contato2',
    {
        duration: 2000,
        distance: '120px',
        delay: 200
    }
)

sr.reveal('.efeito-contato3',
    {
        duration: 2000,
        distance: '120px',
        delay:100
    }
)

sr.reveal('.efeito-contato4',
    {
        duration: 2000,
        distance: '120px',
    }
)

    /* Text Animation */

    document.addEventListener('DOMContentLoaded', () => {
        new TypeIt(".estilo-p", {
            speed: 200,
            loop: true
        }).type('HTML' , {delay: 500}).delete(4).type('CSS', {delay: 900}).delete(3).type('JavaScript', {delay: 900}).delete(10).go()
    })