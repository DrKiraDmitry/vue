<template>
    <header>
        <div class="logo">MIKIRI</div>
        <svg id="menu__bar" onclick="menu();" width="23" height="23"  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.5H23" stroke="#FFE0E0"/>
            <path d="M0 11.246H23" stroke="#FFE0E0"/>
            <path d="M0 22H23" stroke="#FFE0E0"/>
        </svg>            
        <div id="menu__mobile" class="menu">
            <a href="#" @click="switchView('index')">Главная</a>
            <a href="#" @click="switchView('animation')">Анимация и Js</a>
            <a href="#">Векторная Графика</a>
            <a href="#">Верстка и Api</a>
        </div>
    </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Roboto');
body{
    display:  flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
header{
    display: flex;
    flex-direction: row;
    font-size: 15px;
    padding: 20px 30px 0;
    position: absolute;
    justify-content: space-between;
    left: 0;
    right: 0;
    color: #f4ab42;
    align-items: center;
}
.logo{
    font-size: 30px;
}
.menu{
    transition: 1s;
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    top:-200px;
    right:90px;
    border: 1px solid #f4ab42;
    border-radius: 1rem;
}
.menu__mobileon{
    top: 75px;
}
#menu__mobile a{
    padding: 10px 0px;
    margin: 0px 10px;
    text-decoration: none;
    color: #f4ab42;
}
@media(min-width: 425px){
    .menu__mobileon{
        top: 25px;
    }
}
@media(min-width:1024px){
    /* header{
        border-bottom: 1px solid rgb(49, 49, 49);
    } */
    .menu{
        transition: none;
        display: flex;
        flex-direction: row;
        background:transparent;
        border: none;
        border-radius: none;
        position: static;
    }
    .menu__mobileon{
        display: none;
    }
    #menu__bar{
        display: none;
    }
}
/**/
#menu__bar path{
    transition: 1s;
}
.bar1{
    transform: rotate(45deg);
}
.bar2{
    opacity: 0;
}
.bar3{
    transform: rotate(-45deg);
    transform-origin: -30% 82%;
}
</style>
