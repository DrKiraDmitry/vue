var men=0;

    function menu(){
    if(men==0){
    document.getElementById('menu__bar').children[0].classList.add('bar1');
    document.getElementById('menu__bar').children[1].classList.add('bar2');
    document.getElementById('menu__bar').children[2].classList.add('bar3');
    document.getElementById('menu__mobile').classList.add('menu__mobileon');
    men++;
    }else{
        document.getElementById('menu__bar').children[0].classList.remove('bar1');
        document.getElementById('menu__bar').children[1].classList.remove('bar2');
        document.getElementById('menu__bar').children[2].classList.remove('bar3');
        document.getElementById('menu__mobile').classList.remove('menu__mobileon');
        men--;
    }   
}