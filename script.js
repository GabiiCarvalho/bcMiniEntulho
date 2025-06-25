document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav ul');
    
    menuMobile.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Formulário de contato
    const form = document.getElementById('schedule-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        alert(`Obrigado, ${name}! Seu agendamento foi solicitado. Entraremos em contato pelo telefone ${phone} para confirmar.`);
        
        // Limpar formulário
        form.reset();
    });
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adicionar classe ativa ao header quando scrollar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Atualizar ano no footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${year} BC Mini Entulho. Todos os direitos reservados.`;
});