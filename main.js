let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let KERO = document.querySelector('.KERO');
window.onscroll = function(){
  let  value = scrollY
  star.style.left = value + 'px'
  moon.style.top = value *4 + 'px'
  mountains3.style.top = value *2 +'px'
  mountains4.style.top = value *1.5 +'px'
  river.style.top = value *2 +'px'
  boat.style.left = value *2 +'px'
  KERO.style.fontSize = value  + 'px'
  if( scrollY >= 70){
    KERO.style.fontSize = 70  + 'px'
    KERO.style.position = 'fixed'
    if(scrollY >= 430){
        KERO.style.display ='none'
    }else{
        KERO.style.display ='block'
    }
    if(scrollY >= 140){
        document.querySelector('.sec1').style.background = 'linear-gradient(rgb(8 177 225) , #1b023a)';
    }else{
        document.querySelector('.sec1').style.background = 'linear-gradient(to top, #4b0759 , transparent)';
    }
  }
}

