let menu = document.getElementById('menu');
menu.addEventListener('click', (event)=>{
    menu.querySelectorAll('div').forEach(el=> el.classList.remove('active'));
   if (event.target.classList.value=='header__content__menu_item') event.target.classList.add('active'); 
   
})

let slider = document.querySelector('.slider');
slider.addEventListener('click', (event)=>{
    let activeSlide = document.querySelector('.slide_active');
    let buttonLeft = document.getElementById('button_left');
    let buttonRight = document.getElementById('button_right');
    let slide1 = document.getElementById('slide1');
    let slide2 = document.getElementById('slide2');
    let bottomLine = document.querySelector('.slider_bottom-line');
    if(event.target==buttonLeft||event.target==buttonRight){
        activeSlide.classList.remove('slide_active');
        if(activeSlide==slide1){
            slide2.classList.add('slide_active');
            slider.style = 'background-color: #648BF0';
            bottomLine.style = 'display: none';
            
        }else if(activeSlide==slide2){
            slide1.classList.add('slide_active');
            slider.style = 'background-color: #f06c64';
            bottomLine.style = 'display: block';
        }
    } 
    if(event.target.alt == 'phone_vertical'||event.target.classList=='black_screen1'){
        let blackScreen1 = document.querySelector('.black_screen1');
       
        (blackScreen1.style.cssText == 'display: block;')?  blackScreen1.style = 'display: none;' : blackScreen1.style = 'display: block;';
    }
    if(event.target.alt == 'phone_horizontal'||event.target.classList=='black_screen2'){
        let blackScreen2 = document.querySelector('.black_screen2');
       
        (blackScreen2.style.cssText == 'display: block;')?  blackScreen2.style = 'display: none;' : blackScreen2.style = 'display: block;';
    }

})

let portfolio = document.querySelector('.portfolio__content');
let photo = document.querySelector('.portfolio__content__photos');
portfolio.addEventListener('click',(event)=>{
    portfolio.querySelectorAll('div').forEach(el=> el.classList.remove('portfolio_menu_active'));
    portfolio.querySelectorAll('img').forEach(el=> {
        el.classList.remove('photo_active') ; 
        el.style = 'margin: 9px';
    });
    if(event.target.classList.value=='portfolio__content__header_buttons_item') {
        event.target.classList.add('portfolio_menu_active');

        let arr = [];
        let str = '';
        for(let i=0; i<photo.children.length; i++){
            arr.unshift(photo.children[i].outerHTML)
        }
         for(let i = arr.length - 1; i > 0; i--){
            let j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
  
        arr.forEach(el=>str+=el);
        photo.innerHTML = str;
    }else if( event.target.alt=='jpeg'){
        portfolio.querySelectorAll('img').forEach(el=> {
            el.classList.remove('photo_active') ; 
            el.style = 'margin: 9px';
        });
        event.target.classList.add('photo_active');
        event.target.style = 'margin: 4px'
    }
}) 


let popup = document.querySelector('.popup');
let submitBtn = document.getElementById('submit-btn');
let closeBtn = document.getElementById('close-btn');




 submitBtn.addEventListener('click', (event)=>{
    let inputName = document.getElementById('input-name');
    let inputMail = document.getElementById('input-mail');
    let subject = document.getElementById('subject');
    let describe = document.getElementById('describe');
    if (inputName.validity.valid&&inputMail.validity.valid) {
        popup.classList.add('popup_active');   
        (document.getElementById('input-subject').value=='')? subject.innerText = 'Without subject  ' : 
             subject.innerText = 'Subject:   ' + document.getElementById('input-subject').value;
        (document.getElementById('describe-area').value=='')? describe.innerText = 'Without description  ' :  
              describe.innerText = 'Description:   ' + document.getElementById('describe-area').value;

        event.preventDefault()
    }    
})
closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('popup_active'); 
})