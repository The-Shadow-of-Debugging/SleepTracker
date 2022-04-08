<template>
    <div class="app">
        <div class="main">
            <div class="head">
                <h1>Трекер фаз сна</h1>
            </div>
            <div class="middle">
                <my-input-1 
                    placeholder="Логин"
                    v-model="user.login"/>
                <my-input-1
                    class="password" 
                    placeholder="Пароль"
                    type="password"
                    v-model="user.password"/>
                <a class="signup" href="#">Забыли пароль?</a>
            </div>
            <div class="bottom">
                <my-button class="enter">Войти</my-button>
                <a href="#">Зарегистрироваться</a>
            </div>            
        </div>
        <div class="pic"></div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            user: {
                login: '',
                password: ''
            }
        }
    },
    methods: {
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #7183E2;
    color: white;  
}
.app {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.middle {
    display: flex;
    flex-direction: column;
}
.password {
    margin: 18px 0px 6px;
}
.signup {
    align-self: flex-end;
    text-decoration: none;
}
.bottom {
    display: flex;
    flex-direction: column;
    margin-bottom: 21px;
}
.enter {
    margin-bottom: 26px;
}
.bottom a {
    align-self: center;
}
h1 {
    font-size: 48px;
    margin: 51px 34px 0px;
}
.pic {
    background: url('@/img/pic.jpg') center; 
    background-size: cover; 
    height: 100vh;
    background-repeat: no-repeat;
}
</style>