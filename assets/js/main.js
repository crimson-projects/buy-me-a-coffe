let resources = document.getElementById('resources-link')
let res_dr = document.getElementById('res_dr')
let home__data = document.getElementById('home__data')
let home__tags = document.getElementById('home__tags')
let vid__cr = document.getElementById('vid__cr')
resources.addEventListener('click', ()=>{   
    res_dr.classList.toggle('hide')
})


let tags = ['Video creators' , 'Artists' , 'Writers' , 'Musicians' , 'Developers' , 'Gaming' , 'Podcasters' , 'Community']

tags.map((e)=>{
    let p__element = document.createElement('p')
    home__tags.appendChild(p__element)
    p__element.textContent = e
})
