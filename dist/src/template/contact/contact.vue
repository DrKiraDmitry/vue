<template>
    <div class="Table">
        <div class="logo">
            <p class="outside">М</p>
            <h2 class="logo__text">Мы хотели бы услышать о вашем проекте</h2>
        </div>
        <form action="/Home/ContactUs" method="post" name="ContactUsModel">
            <div class="Table__info">
                <input name="Name" type="text" placeholder="Ваше имя*">
                <input name="Email" type="text" placeholder="Ваш E-mail*">
                <input name="Phone" type="text" placeholder="Ваш телефон">
            </div>
            <textarea name="Text" placeholder="Ваше сообщение"></textarea>
            <div class="Table__button">
                <button type="submit">Отправить</button>
            </div>
        </form>
    </div>
</template>

<style >
.logo{
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
}
.logo__text{
    position:absolute;
    margin: 0;
    font-size: 35px;
}
.outside{
    display: inline-block;
    position: relative;
    font-size: 200px;
    color: #670a35;
    margin: 0;
}
    .Table{
    padding: 20px;
    background: #520428;
    color: white;
}
.Table form{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.Table__info{
    display: flex;
    flex-direction:column;
}
input{
    background: transparent;
    border: 1px solid #ffffff;
    color: #f3f3f3;
    font-size: 20px;
    padding: 10px;
    margin: 10px 15px;
}
.Table textarea{
    background: transparent;
    border: 1px solid #ffffff;
    color: #f3f3f3;
    font-size: 20px;
    padding: 10px;
    margin: 10px 15px;
    resize: none;
    height: 150px;
}
.Table__button button{
    background: #3b8daf;
    border: none;
    color: #f3f3f3;
    font-size: 20px;
    padding:10px 50px;
    margin: 10px 15px;
}
@media (min-width: 768px){
    .Table__info{
        flex-direction:row;
    }
    input{
        width:100%; 
    }
}
</style>