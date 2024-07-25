//  Function to toglle Nav Bar =========================================>
const navBar = document.getElementById('nav_Bar')
const toggleBtn = document.getElementById('toggleIconDiv')
const closeBtn = document.getElementById('closeIconDiv')

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.add('show')
})

closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('show')

})

const nav = document.querySelectorAll('.navLink');
function takeAction(){
    navBar.classList.remove('show')
}
nav.forEach(n=>n.addEventListener('click',takeAction))


// Products Filter ====================================>
const menu = document.querySelectorAll('.menuListItem')
const products = document.querySelectorAll('.productDiv')

for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(){
        for(let a =  0; a < menu.length; a++){
            menu[a].classList.remove('active')
        }
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')
        
        for(let p = 0; p<products.length; p++){
            products[p].classList.add('hide')
            products[p].classList.remove('live')
            if(products[p].getAttribute('data-item') == dataFilter){
                products[p].classList.remove('hide')
                products[p].classList.add('active')
            }
        }
    })
}

 // Scroll Reveal ======================================================>
 const sr = ScrollReveal({ 
    distance: '30px',
    duration: 2000,
    origin: 'top',
    reset: true
    });

    sr.reveal(`.home, .about, .product, .blog, .sponsors, .footer, .featured, .sponsorDiv `,
    {interval: 200,
       
   })
  
    sr.reveal(`.numbers, .gridItem`,
    {interval: 200,
       origin: 'bottom'
   })


    sr.reveal(`.sectionIntro`,
    {interval: 200,
       origin: 'right'
   })
