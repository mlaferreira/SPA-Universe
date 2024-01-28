// Pegar o elemento body
const bodyElement = document.querySelector('.bg-home');
const linkAll    = document.querySelectorAll('a');
const boxApp     = document.querySelector('#app');




function ativaLink(element) {
    // Remove a classe 'active' de todos os links
    
      linkAll.forEach(function(link) {
      link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link clicado
    element.classList.add('active');
  }


  const routes = {
    '/home': '../pages/home.html',
    '/universo': '../pages/universo.html',
    '/exploracao': '../pages/exploracao.html',
     404: '/pages/404.html'
  }
 
    linkAll.forEach(link =>{
        link.addEventListener('click', (e) =>{
            e.preventDefault();             
            const { pathname } = window.location;
            window.history.pushState({}, '', e.target.href);
            console.log(pathname);
           
            const route = routes[pathname]|| routes[404];
            
            
            fetch(route)
            .then(data => data.text())
            .then(html =>{
               
                if(pathname === '/home'){
                    bodyElement.classList.add('bg-home');
                    bodyElement.classList.remove('bg-universo');
                    bodyElement.classList.remove('bg-exploracao');
                    ativaLink(link);
                    boxApp.innerHTML = html;
                    
                    
                }
                if(pathname === '/universo'){
                    bodyElement.classList.add('bg-universo');
                    bodyElement.classList.remove('bg-home');
                    bodyElement.classList.remove('bg-exploracao');
                    ativaLink(link);
                    boxApp.innerHTML = html;
                }
                if(pathname === '/exploracao'){
                    bodyElement.classList.add('bg-exploracao');
                    bodyElement.classList.remove('bg-home');
                    bodyElement.classList.remove('bg-universo');
                    ativaLink(link);
                    boxApp.innerHTML = html;
                   
                }
                
                boxApp.innerHTML = html;
            })
           
            
            
        })
    })

  