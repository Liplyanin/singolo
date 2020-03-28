document.addEventListener('scroll',(event)=>{
    let curPos = window.scrollY;
    let blocks = document.querySelectorAll('body > div');
    let links = document.querySelectorAll('#menu > a');

    blocks.forEach(el=>{
        if(el.offsetTop <= curPos && curPos<(el.offsetTop + el.offsetHeight)) {
            links.forEach(a=>{
                a.firstElementChild.classList.remove('active');                
                if(a.getAttribute('href').substring(1)==el.getAttribute('id')){
                    a.firstElementChild.classList.add('active')
                }
            })
        }
    })
})


let header = document.querySelector('.header');
let menu = document.getElementById('menu');
let mobileMenu = document.querySelector('.header__content__mobile-menu');
let mobileDark = document.querySelector('.mobile-menu_dark-part');

header.addEventListener('click', (event)=>{
    header.querySelectorAll('div').forEach(el=> el.classList.remove('active'));
    if (event.target.classList.value=='header__content__menu_item') {
        event.target.classList.add('active');
        if(mobileMenu.classList.value=='header__content__mobile-menu mobile-menu__active') {
            document.querySelector('.header__content__mobile-menu_icon').style = 'transform: rotate(90deg)';
            document.querySelector('body').style = 'position: relative;';
            header.querySelectorAll('div').forEach(el=> el.classList.remove('mobile-menu__active'));
        }
    }

    if (event.target.classList.value=='header__content__mobile-menu_icon' && mobileMenu.classList.value=='header__content__mobile-menu') {
        event.target.style = 'transform: rotate(180deg); margin-left: -10px;';
        document.querySelector('body').style = 'overflow: hidden';
        mobileMenu.classList.add('mobile-menu__active');
        mobileDark.classList.add('mobile-menu__active');
    }else if(event.target.classList.value=='header__content__mobile-menu_icon'&&mobileMenu.classList.value=='header__content__mobile-menu mobile-menu__active'){
        event.target.style = 'transform: rotate(90deg); top: auto; left: 30px;';
        header.querySelectorAll('div').forEach(el=> el.classList.remove('mobile-menu__active'));
        document.querySelector('body').style = 'position: relative;';

   
        
    }    
})

let slider = document.querySelector('.slider');
let mainSlider = document.querySelector('.slider__content');
slider.addEventListener('click', (event)=>{
    let activeSlide = document.querySelector('.slide_active');
    let buttonLeft = document.getElementById('button_left');
    let buttonRight = document.getElementById('button_right');
    let slide1 = document.getElementById('slide1');
    let slide2 = document.getElementById('slide2');
    let bottomLine = document.querySelector('.slider_bottom-line');

    
    if(event.target==buttonLeft){
        let opacity = 1;
        let right = 0;
        let interval = setInterval(function(){
            if(opacity==0.5) opacity+=0.1;
            if(right==100){
                clearInterval(interval);
                activeSlide.style  = 'display: none;'                        
                    if(activeSlide==slide1){
                        activeSlide.classList.remove('slide_active');
                        slide2.style = 'position: relative; left: 100%';
                        bottomLine.style = 'display: none';
                        let left = 100;
                        let opacity = 0.5;
                        let interval2 =setInterval(function(){
                            
                            if(left==0){
                                clearInterval(interval2);
                                slider.style = 'background-color: #648BF0;'; 
                                slide2.classList.add('slide_active');
                                slide2.style = '';
                            } else {
                                opacity+=0.2;
                                left-=10;
                                slide2.style  = 'position: relative; left:' + left +'%';
                                slider.style.cssText += 'background-color: #648BF0; opacity:' + opacity;
                            }
                        }, 10); 
                        slide2.classList.add('slide_active'); 
                    }
                    if(activeSlide==slide2){
                        activeSlide.classList.remove('slide_active');
                        slide1.style = 'position: relative; left: 100%';
                        bottomLine.style = 'display: none';
                        let left = 100;
                        let interval2 =setInterval(function(){
                            if(left==0){
                                clearInterval(interval2);
                                slide1.classList.add('slide_active');
                                slide1.style = '';
                            } else {
                                left-=10;
                                slide1.style  = 'position: relative; left:' + left +'%';
                            }
                        }, 10); 
                        slide2.classList.add('slide_active');
                        slider.style = 'background-color: #f06c64';                         
                    }
            } else {          
                opacity-=0.02;      
                right+=10;
                activeSlide.style  = 'position: relative; right:' + right +'%';
                slider.style.cssText += 'opacity:' + opacity;
            }
        }, 10);    
    }else if(event.target==buttonRight){
        let opacity = 1;
        let left = 0;
        let interval = setInterval(function(){
            if(opacity==0.5) opacity+=0.1;
            if(left==100){
                clearInterval(interval);
                activeSlide.style  = 'display: none;'                        
                    if(activeSlide==slide1){
                        activeSlide.classList.remove('slide_active');
                        slide2.style = 'position: relative; right: 100%';
                        bottomLine.style = 'display: none';
                        let right = 100;
                        let opacity = 0.5;
                        let interval2 =setInterval(function(){
                            
                            if(right==0){
                                clearInterval(interval2);
                                slider.style = 'background-color: #648BF0;'; 
                                slide2.classList.add('slide_active');
                                slide2.style = '';
                            } else {
                                opacity+=0.2;
                                right-=10;
                                slide2.style  = 'position: relative; right:' + right +'%';
                                slider.style.cssText += 'background-color: #648BF0; opacity:' + opacity;
                            }
                        }, 10); 
                        slide2.classList.add('slide_active'); 
                    }
                    if(activeSlide==slide2){
                        activeSlide.classList.remove('slide_active');
                        slide1.style = 'position: relative; left: 100%';
                        bottomLine.style = 'display: none';
                        let left = 100;
                        let interval2 =setInterval(function(){
                            
                            if(left==0){
                                clearInterval(interval2);
                                slide1.classList.add('slide_active');
                                slide1.style = '';
                            } else {
                                left-=10;
                                slide1.style  = 'position: relative; left:' + left +'%';
                            }
                        }, 10); 
                        slide2.classList.add('slide_active');
                        slider.style = 'background-color: #f06c64';                         
                    }
            } else {          
                opacity-=0.02;      
                left+=10;
                activeSlide.style  = 'position: relative; left:' + left +'%';
                slider.style.cssText += 'opacity:' + opacity;
            }
        }, 10);    
    }  

    if(event.target.alt == 'phoneOn'){
        event.target.style = 'display: none';
        let blackVert = document.getElementById('phone_vertical_black');
        let blackHor = document.getElementById('phone_horisontal_black');
        if(event.target.id=='phone_vertical') blackVert.style = 'display: flex';
        if(event.target.id=='phone_horisontal') blackHor.style = 'display: flex';
    }else if(event.target.alt == 'phoneOff'){
        event.target.style = 'display: none';
        let vPhone = document.getElementById('phone_vertical');
        let hPhone = document.getElementById('phone_horisontal');
        if(event.target.id=='phone_vertical_black') vPhone.style = 'display: flex';
        if(event.target.id=='phone_horisontal_black') hPhone.style = 'display: flex';
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

let inputName = document.getElementById('input-name');
let inputMail = document.getElementById('input-mail');
let subject = document.getElementById('subject');
let describe = document.getElementById('describe');

 submitBtn.addEventListener('click', (event)=>{
 
    if (inputName.validity.valid&&inputMail.validity.valid) {
        popup.classList.add('popup_active'); 
        document.querySelector('body').style = 'overflow: hidden';
        (document.getElementById('input-subject').value=='')? subject.innerText = 'Without subject  ' : 
             subject.innerText = 'Subject:   ' + document.getElementById('input-subject').value;
        (document.getElementById('describe-area').value=='')? describe.innerText = 'Without description  ' :  
              describe.innerText = 'Description:   ' + document.getElementById('describe-area').value;

        event.preventDefault()
    }    
})
closeBtn.addEventListener('click', ()=>{
    document.querySelector('body').style = 'position: relative;';
    popup.classList.remove('popup_active'); 
    inputName.value = '';
    inputMail.value = '';
    document.getElementById('input-subject').value = ' ';
    document.getElementById('describe-area').value = ' ';
    
})






