function App(){
    // addEventListener('resize', ()=> location.reload())

    const buttonmenu = document.querySelector('.menuButton')
    const primaryMenu = document.querySelector('.primaryMenu')
    const acordions = Array.from(document.querySelectorAll('.acordion'))
    const textAcordions = Array.from(document.querySelectorAll('.textAcordion'))
    const navMenu = Array.from(document.querySelectorAll('.primaryMenu > li >a'))
    const thanks = document.querySelector('.thanks')
    const telInput = document.getElementById('whats')


    telInput.addEventListener('keyup',(event)=>{
        let input = event.target
        input.value = phoneMask(input.value)
    })


    const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
      }


    if(window.location.hash == '#success'){thanks.style.display = 'flex'}


    navMenu[0].classList.add('selected')
   

    acordions.map((elem, i)=>{
        elem.addEventListener('click', ()=>{
            textAcordions[i].style.display == '' || textAcordions[i].style.display == 'none' ? textAcordions[i].style.display = 'block' : textAcordions[i].style.display = 'none'

            textAcordions[i].style.borderBottom ="#828282 2px solid"

           elem.classList.toggle('ct')
 
            elem.children[1].innerHTML == "+" ? elem.children[1].innerHTML = '-' : elem.children[1].innerHTML = '+'
        })
    })



    
    buttonmenu.addEventListener('click', ()=>{
        primaryMenu.style.display =="" || primaryMenu.style.display == "none" ?  primaryMenu.style.cssText = 'display: flex' : primaryMenu.style.display = 'none';
        buttonmenu.classList.toggle('activit')
    })




 

}

App()