<template>
  <div class="signin">
        <div class="main">
            <div class="head">
                <h1>Трекер фаз сна</h1>
            </div>
            <form class="middle" name="signIn">
                <my-input-1 
                    placeholder="Логин"
                    v-model="user.login"/>
                <my-input-1
                    class="password" 
                    placeholder="Пароль"
                    type="password"
                    v-model="user.password"/>
                <a class="signup" href="#">Забыли пароль?</a>
            </form>
            <div class="bottom">
                <my-button 
                class="enter"
                @click="$router.push('/main')"
                >Войти</my-button>
                <a href="#" @click="$router.push('/signup')" class="sign">Зарегистрироваться</a>
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

<style scoped>
.signin {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 20px;
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
    color: white;
}
.sign {
    color: white;
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