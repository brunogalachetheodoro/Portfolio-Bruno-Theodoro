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

// Page Language

let menuToggle = document.getElementById('check')  

menuToggle.addEventListener('change', ()=> {
    
    if(check.checked){
        //Header
        document.getElementById('about').innerHTML='ABOUT'
        document.getElementById('projects').innerHTML='PROJECTS'
        document.getElementById('contact').innerHTML='CONTACT'

        //Name Section
        document.getElementById('h2-name-section').innerHTML='Front-End Developer'
        document.getElementById('p-name-section').innerHTML='Developing with '
        document.getElementById('botaocv').innerHTML='DONWLOAD RESUME'

        //About Section
        document.getElementById('h2-about-section').innerHTML='About Me'
        document.getElementById('p1-about-section').innerHTML="Passionate about technology, I found in web development a way to express my creativity and make a positive impact on people's lives."
        document.getElementById('p2-about-section').innerHTML='I bring teamwork, self-learning, leadership, and problem-solving skills that set me apart and allow me to contribute effectively to any team I join.'
        document.getElementById('p3-about-section').innerHTML='As a self-taught developer, I’ve acquired the necessary technical skills and applied them to practical projects that simulate real-world scenarios, creating meaningful and useful solutions.'
        document.getElementById('p4-about-section').innerHTML='A gamer, avid reader, and sports enthusiast, my hobbies help me maintain balance in life, improve my personal development, and stay focused on excelling as a developer.'

        //Soft Skills Section
        document.getElementById('p1-soft-section').innerHTML='Time Management'
        document.getElementById('p2-soft-section').innerHTML='Problem Solving'
        document.getElementById('p3-soft-section').innerHTML='Self-Taught'
        document.getElementById('p4-soft-section').innerHTML='Teamwork'
        document.getElementById('p5-soft-section').innerHTML='Creative'

        //Projects Section
        document.getElementById('h2-projects-section').innerHTML='Projects'
            //Project 1
            document.getElementById('1-project-title').innerHTML='Digital Menu'
            document.getElementById('p1-project1').innerHTML='Menu designed for a Japanese restaurant with features and interactions that enhance the user experience.'
            document.getElementById('p2-project1').innerHTML='Built with a mobile-first strategy and optimized for larger screens.'
            document.getElementById('p3-project1').innerHTML= '<span class="estilo-tec">Technologies Used:</span>'
            document.getElementById('p4-project1').innerHTML='HTML, CSS and JavaScript'
            //Project 2
            document.getElementById('2-project-title').innerHTML='Login Page'
            document.getElementById('p1-project2').innerHTML='A page designed for user login, initially focused on the interface without additional functionalities.'
            document.getElementById('p2-project2').innerHTML='Built with a mobile-first strategy and optimized for larger screens.'
            document.getElementById('p3-project2').innerHTML= '<span class="estilo-tec">Technologies Used:</span>'
            document.getElementById('p4-project2').innerHTML='HTML and CSS'
            //Project 3
            document.getElementById('3-project-title').innerHTML='Barbershop Page'
            document.getElementById('p1-project3').innerHTML="An informational page about the barbershop, designed to drive leads to the business's WhatsApp."
            document.getElementById('p2-project3').innerHTML='Built with a mobile-first approach for better adaptation to larger screens.'
            document.getElementById('p3-project3').innerHTML= '<span class="estilo-tec">Technologies Used:</span>'
            document.getElementById('p4-project3').innerHTML='HTML, CSS and JavaScript'

        //Contact
        document.getElementById('h2-contact-section').innerHTML='Contact'
        document.getElementById('button-contact').innerHTML='ENTER'
        document.getElementById('button-contact2').innerHTML='ENTER'
        document.getElementById('button-contact3').innerHTML='ENTER'
        document.getElementById('button-contact4').innerHTML='ENTER'

    } else {
         //Header
         document.getElementById('about').innerHTML='SOBRE'
         document.getElementById('projects').innerHTML='PROJETOS'
         document.getElementById('contact').innerHTML='CONTATO'

        //Name Section
        document.getElementById('h2-name-section').innerHTML='Desenvolvedor Front-End'
        //document.getElementById('p-name-section').innerHTML='Desenvolvendo com'
        document.getElementById('botaocv').innerHTML='DONWLOAD CV'

        //About Section
        document.getElementById('h2-about-section').innerHTML='Sobre Mim'
        document.getElementById('p1-about-section').innerHTML="Apaixonado por tecnologia, pude encontrar no desenvolvimento web uma forma de expressar minha criatividade e contribuir na vida de outras pessoas."
        document.getElementById('p2-about-section').innerHTML='Trabalho em equipe,autodidata, liderança e capacidade de resolução são diferenciais que me destacam para agregar e contribuir com qualquer equipe que for trabalhar.'
        document.getElementById('p3-about-section').innerHTML='Como autodidata, pude aprender as habilidades técnicas necessárias e aplicá-las em projetos práticos simulando a realidade, criando projetos úteis.'
        document.getElementById('p4-about-section').innerHTML='Gamer, leitor e entusiasta esportivo, meus hobbies me mantém equilibrado para melhor exercer minhas tarefas como desenvolvedor e ainda me ajudam no desenvolvimento pessoal.'

         //Soft Skills Section
         document.getElementById('p1-soft-section').innerHTML='Gestão de Tempo'
         document.getElementById('p2-soft-section').innerHTML='Resolução de Problemas'
         document.getElementById('p3-soft-section').innerHTML='Autodidata'
         document.getElementById('p4-soft-section').innerHTML='Trabalho em Equipe'
         document.getElementById('p5-soft-section').innerHTML='Criativo'

         // Projects Section
        document.getElementById('h2-projects-section').innerHTML='Projetos'
            //Project 1
            document.getElementById('1-project-title').innerHTML='Cardápio Digital'
            document.getElementById('p1-project1').innerHTML='Cardápio projetado para restaurante japonês com funcionalidades e interações que melhoram a experiência do usuário.'
            document.getElementById('p2-project1').innerHTML='Construido com a estratégia mobile first e adaptado para telas maiores.'
            document.getElementById('p3-project1').innerHTML= '<span class="estilo-tec">Tecnologias utilizadas:</span>'
            document.getElementById('p4-project1').innerHTML='HTML, CSS e JavaScript'
            //Project 2
            document.getElementById('2-project-title').innerHTML='Página de Login'
            document.getElementById('p1-project2').innerHTML='Página criada para login do usuário. Inicialmente focada apenas na interface, sem funcionalidades adicionais.'
            document.getElementById('p2-project2').innerHTML='Construido com a estratégia mobile first e adaptado para telas maiores.'
            document.getElementById('p3-project2').innerHTML= '<span class="estilo-tec">Tecnologias utilizadas:</span>'
            document.getElementById('p4-project2').innerHTML='HTML e CSS'
            //Project 3
            document.getElementById('3-project-title').innerHTML='Página Barbearia'
            document.getElementById('p1-project3').innerHTML="Página informativa sobre barbearia com o objetivo de levar leads ao whatsapp do comércio."
            document.getElementById('p2-project3').innerHTML='Aplicado os conceitos de mobile first para uma melhor adaptação em telas maiores.'
            document.getElementById('p3-project3').innerHTML= '<span class="estilo-tec">Tecnologias utilizadas:</span>'
            document.getElementById('p4-project3').innerHTML='HTML, CSS e JavaScript'
        //Contact
        document.getElementById('h2-contact-section').innerHTML='Contato'
        document.getElementById('button-contact').innerHTML='ENTRAR'
        document.getElementById('button-contact2').innerHTML='ENTRAR'
        document.getElementById('button-contact3').innerHTML='ENTRAR'
        document.getElementById('button-contact4').innerHTML='ENTRAR'
    }
})